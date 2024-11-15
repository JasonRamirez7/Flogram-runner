import Tokenizer from "./Tokenizer/index.mjs";
import Parser from "./SimpleParser/index.mjs";
import Compiler from "./Compilers/SimplerWASM/index.mjs";
import {
  createMemoryManager as MemoryManager,
  createDrawer as Draw,
  createDate as Dates,
} from "./Compilers/MemoryManager/index.mjs";
import { SIMPLE_IMPORTS } from "./Tests/Shared/index.mjs";

const execute = (glue, module) =>
  new Promise(async (resolve, reject) => {
    let key;

    const outputs = [];

    for (const [iKey, value] of Object.entries(glue.procedures)) {
      const { name, path } = value;
      if (name === "main" && path === "Module") {
        key = iKey;
        break;
      }
    }

    if (key) {
      try {
        const memory = new WebAssembly.Memory({
          initial: 128,
        });

        const state = MemoryManager(memory);
        const drawer = Draw(memory, outputs);
        const dates = Dates();

        const descriptionImports = Object.freeze({
          imports: {},
        });

        const memoryImport = "memory";

        Object.keys(glue.imports).forEach((importKey) => {
          if (state[importKey]) {
            descriptionImports.imports[importKey] = state[importKey];
          }
          if (drawer[importKey]) {
            descriptionImports.imports[importKey] = drawer[importKey];
          }
          if (dates[importKey]) {
            descriptionImports.imports[importKey] = dates[importKey];
          }
          if (importKey === memoryImport) {
            descriptionImports.imports[importKey] = memory;
          }
        });

        const moduleCompiled = await WebAssembly.compile(module);
        const moduleInstance = await WebAssembly.instantiate(
          moduleCompiled,
          descriptionImports
        );

        const procedure = moduleInstance.exports[key];

        if (procedure) {
          let value = procedure();

          resolve(outputs);
        }
      } catch (e) {
        reject([
          {
            message: e.message,
            type: 100,
            position: 0,
            length: 0,
          },
        ]);
      }
    } else {
      reject([
        {
          message:
            "Error: Missing main function. Every Flogram program must include an entry point defined as the main function.",
          type: 101,
          position: 0,
          length: 0,
        },
      ]);
    }
  });

const run = (value) =>
  new Promise(async (resolve, reject) => {
    const failures = [];
    let representation = null;

    const ENCODER = new TextEncoder();

    const tokenizer = new Tokenizer();

    const parser = Parser.create({
      path: "Module",
      imports: SIMPLE_IMPORTS,
    });

    parser.on(Parser.EVENT_FAIL, (failure) => {
      failures = [...failures, failure];
      representation = null;
    });

    parser.on(Parser.EVENT_DONE, (data) => {
      representation = data;
    });

    tokenizer.on("token", (position, array, index, length) => {
      parser.feed(position, array, index, length);
    });

    tokenizer.feed(ENCODER.encode(value));

    tokenizer.done();

    parser.done();

    if (representation) {
      const compilerOptions = Object.freeze({
        memory: true,
      });

      const [glue, module] = Compiler.compile(representation, compilerOptions);

      execute(glue, module)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      //couldn't parse, return parsing errors
      reject(failures);
    }
  });

const module = {
  run,
  Parser,
  Tokenizer,
  Compiler,
  MemoryManager,
  Draw,
  Dates,
  SIMPLE_IMPORTS,
};

export default module;
