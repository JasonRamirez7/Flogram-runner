"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/@munezero/floparser/index.js":
/*!******************************************!*\
  !*** ./app/@munezero/floparser/index.js ***!
  \******************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Compiler: () => (/* reexport safe */ _Compilers_SimplerWASM_index_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   Dates: () => (/* reexport safe */ _Compilers_MemoryManager_index_mjs__WEBPACK_IMPORTED_MODULE_3__.createDate),\n/* harmony export */   Draw: () => (/* reexport safe */ _Compilers_MemoryManager_index_mjs__WEBPACK_IMPORTED_MODULE_3__.createDrawer),\n/* harmony export */   MemoryManager: () => (/* reexport safe */ _Compilers_MemoryManager_index_mjs__WEBPACK_IMPORTED_MODULE_3__.createMemoryManager),\n/* harmony export */   Parser: () => (/* reexport safe */ _SimpleParser_index_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   SIMPLE_IMPORTS: () => (/* reexport safe */ _Tests_Shared_index_mjs__WEBPACK_IMPORTED_MODULE_4__.SIMPLE_IMPORTS),\n/* harmony export */   Tokenizer: () => (/* reexport safe */ _Tokenizer_index_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   run: () => (/* binding */ run)\n/* harmony export */ });\n/* harmony import */ var _Tokenizer_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tokenizer/index.mjs */ \"(app-pages-browser)/./app/@munezero/floparser/Tokenizer/index.mjs\");\n/* harmony import */ var _SimpleParser_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimpleParser/index.mjs */ \"(app-pages-browser)/./app/@munezero/floparser/SimpleParser/index.mjs\");\n/* harmony import */ var _Compilers_SimplerWASM_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Compilers/SimplerWASM/index.mjs */ \"(app-pages-browser)/./app/@munezero/floparser/Compilers/SimplerWASM/index.mjs\");\n/* harmony import */ var _Compilers_MemoryManager_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Compilers/MemoryManager/index.mjs */ \"(app-pages-browser)/./app/@munezero/floparser/Compilers/MemoryManager/index.mjs\");\n/* harmony import */ var _Tests_Shared_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tests/Shared/index.mjs */ \"(app-pages-browser)/./app/@munezero/floparser/Tests/Shared/index.mjs\");\n\n\n\n\n\nconst execute = (glue, module)=>new Promise(async (resolve, reject)=>{\n        let key;\n        for (const [iKey, value] of Object.entries(glue.procedures)){\n            const { name, path } = value;\n            if (name === \"main\" && path === \"Module\") {\n                key = iKey;\n                break;\n            }\n        }\n        if (key) {\n            try {\n                const memory = new WebAssembly.Memory({\n                    initial: 128\n                });\n                const state = (0,_Compilers_MemoryManager_index_mjs__WEBPACK_IMPORTED_MODULE_3__.createMemoryManager)(memory);\n                const outputElement = document.createElement(\"div\");\n                const drawer = (0,_Compilers_MemoryManager_index_mjs__WEBPACK_IMPORTED_MODULE_3__.createDrawer)(memory, outputElement);\n                const dates = (0,_Compilers_MemoryManager_index_mjs__WEBPACK_IMPORTED_MODULE_3__.createDate)();\n                const descriptionImports = Object.freeze({\n                    imports: {}\n                });\n                const memoryImport = \"memory\";\n                Object.keys(glue.imports).forEach((importKey)=>{\n                    if (state[importKey]) {\n                        descriptionImports.imports[importKey] = state[importKey];\n                    }\n                    if (drawer[importKey]) {\n                        descriptionImports.imports[importKey] = drawer[importKey];\n                    }\n                    if (dates[importKey]) {\n                        descriptionImports.imports[importKey] = dates[importKey];\n                    }\n                    if (importKey === memoryImport) {\n                        descriptionImports.imports[importKey] = memory;\n                    }\n                });\n                const moduleCompiled = await WebAssembly.compile(module);\n                const moduleInstance = await WebAssembly.instantiate(moduleCompiled, descriptionImports);\n                const procedure = moduleInstance.exports[key];\n                if (procedure) {\n                    if (!outputElement) {\n                        failures.push({\n                            message: 'Error: Output element not found. Click \"Run\" again for re-evaluation',\n                            type: 100,\n                            position: 0,\n                            length: 0\n                        });\n                    }\n                    if (outputElement) {\n                        outputElement.innerHTML = \"\";\n                    }\n                    let value = procedure();\n                    if (outputElement) {\n                        output = outputElement.innerHTML;\n                    }\n                    resolve(output);\n                }\n            } catch (e) {\n                reject({\n                    message: e.message + \"😊\",\n                    type: 100,\n                    position: 0,\n                    length: 0\n                });\n            }\n        } else {\n            reject({\n                message: \"Error: Missing main function. Every Flogram program must include an entry point defined as the main function.\",\n                type: 101,\n                position: 0,\n                length: 0\n            });\n        }\n    });\nconst run = (value)=>new Promise(async (resolve, reject)=>{\n        let output1 = \"\";\n        const errors = [];\n        let representation = null;\n        const ENCODER = new TextEncoder();\n        const tokenizer = new _Tokenizer_index_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        const parser = _SimpleParser_index_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n            path: \"Module\",\n            imports: _Tests_Shared_index_mjs__WEBPACK_IMPORTED_MODULE_4__.SIMPLE_IMPORTS\n        });\n        parser.on(_SimpleParser_index_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].EVENT_FAIL, (failure)=>{\n            failures = [\n                ...failures,\n                failure\n            ];\n            representation = null;\n        });\n        parser.on(_SimpleParser_index_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].EVENT_DONE, (data)=>{\n            representation = data;\n        });\n        tokenizer.on(\"token\", (position, array, index, length)=>{\n            parser.feed(position, array, index, length);\n        });\n        tokenizer.feed(ENCODER.encode(value));\n        tokenizer.done();\n        parser.done();\n        if (representation) {\n            const compilerOptions = Object.freeze({\n                memory: true\n            });\n            const [glue, module] = _Compilers_SimplerWASM_index_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].compile(representation, compilerOptions);\n            execute(glue, module).then((res)=>{\n                console.log(\"execute res::: \", res);\n            }).catch((err)=>{\n                console.log(\"execute error::: \", err);\n            });\n            return {\n                errors,\n                value\n            };\n        } else {\n            //couldn't parse, return parsing errors\n            return {\n                errors,\n                value: null\n            };\n        }\n    });\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9AbXVuZXplcm8vZmxvcGFyc2VyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDQTtBQUNXO0FBS1o7QUFDYTtBQUUxRCxNQUFNVSxVQUFVLENBQUNDLE1BQU1DLFNBQ3JCLElBQUlDLFFBQVEsT0FBT0MsU0FBU0M7UUFDMUIsSUFBSUM7UUFFSixLQUFLLE1BQU0sQ0FBQ0MsTUFBTUMsTUFBTSxJQUFJQyxPQUFPQyxPQUFPLENBQUNULEtBQUtVLFVBQVUsRUFBRztZQUMzRCxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFLEdBQUdMO1lBQ3ZCLElBQUlJLFNBQVMsVUFBVUMsU0FBUyxVQUFVO2dCQUN4Q1AsTUFBTUM7Z0JBQ047WUFDRjtRQUNGO1FBRUEsSUFBSUQsS0FBSztZQUNQLElBQUk7Z0JBQ0YsTUFBTVEsU0FBUyxJQUFJQyxZQUFZQyxNQUFNLENBQUM7b0JBQ3BDQyxTQUFTO2dCQUNYO2dCQUVBLE1BQU1DLFFBQVF4Qix1RkFBYUEsQ0FBQ29CO2dCQUM1QixNQUFNSyxnQkFBZ0JDLFNBQVNDLGFBQWEsQ0FBQztnQkFDN0MsTUFBTUMsU0FBUzFCLGdGQUFJQSxDQUFDa0IsUUFBUUs7Z0JBQzVCLE1BQU1JLFFBQVF6Qiw4RUFBS0E7Z0JBRW5CLE1BQU0wQixxQkFBcUJmLE9BQU9nQixNQUFNLENBQUM7b0JBQ3ZDQyxTQUFTLENBQUM7Z0JBQ1o7Z0JBRUEsTUFBTUMsZUFBZTtnQkFFckJsQixPQUFPbUIsSUFBSSxDQUFDM0IsS0FBS3lCLE9BQU8sRUFBRUcsT0FBTyxDQUFDLENBQUNDO29CQUNqQyxJQUFJWixLQUFLLENBQUNZLFVBQVUsRUFBRTt3QkFDcEJOLG1CQUFtQkUsT0FBTyxDQUFDSSxVQUFVLEdBQUdaLEtBQUssQ0FBQ1ksVUFBVTtvQkFDMUQ7b0JBQ0EsSUFBSVIsTUFBTSxDQUFDUSxVQUFVLEVBQUU7d0JBQ3JCTixtQkFBbUJFLE9BQU8sQ0FBQ0ksVUFB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QUNGO0FBV0EiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSkFTT05cXERlc2t0b3BcXE5ldyBmb2xkZXJcXGFwcFxcQG11bmV6ZXJvXFxmbG9wYXJzZXJcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb2tlbml6ZXIgZnJvbSBcIi4vVG9rZW5pemVyL2luZGV4Lm1qc1wiO1xuaW1wb3J0IFBhcnNlciBmcm9tIFwiLi9TaW1wbGVQYXJzZXIvaW5kZXgubWpzXCI7XG5pbXBvcnQgQ29tcGlsZXIgZnJvbSBcIi4vQ29tcGlsZXJzL1NpbXBsZXJXQVNNL2luZGV4Lm1qc1wiO1xuaW1wb3J0IHtcbiAgY3JlYXRlTWVtb3J5TWFuYWdlciBhcyBNZW1vcnlNYW5hZ2VyLFxuICBjcmVhdGVEcmF3ZXIgYXMgRHJhdyxcbiAgY3JlYXRlRGF0ZSBhcyBEYXRlcyxcbn0gZnJvbSBcIi4vQ29tcGlsZXJzL01lbW9yeU1hbmFnZXIvaW5kZXgubWpzXCI7XG5pbXBvcnQgeyBTSU1QTEVfSU1QT1JUUyB9IGZyb20gXCIuL1Rlc3RzL1NoYXJlZC9pbmRleC5tanNcIjtcblxuY29uc3QgZXhlY3V0ZSA9IChnbHVlLCBtb2R1bGUpID0+XG4gIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQga2V5O1xuXG4gICAgZm9yIChjb25zdCBbaUtleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGdsdWUucHJvY2VkdXJlcykpIHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgcGF0aCB9ID0gdmFsdWU7XG4gICAgICBpZiAobmFtZSA9PT0gXCJtYWluXCIgJiYgcGF0aCA9PT0gXCJNb2R1bGVcIikge1xuICAgICAgICBrZXkgPSBpS2V5O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBtZW1vcnkgPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHtcbiAgICAgICAgICBpbml0aWFsOiAxMjgsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHN0YXRlID0gTWVtb3J5TWFuYWdlcihtZW1vcnkpO1xuICAgICAgICBjb25zdCBvdXRwdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgZHJhd2VyID0gRHJhdyhtZW1vcnksIG91dHB1dEVsZW1lbnQpO1xuICAgICAgICBjb25zdCBkYXRlcyA9IERhdGVzKCk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbXBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgICAgaW1wb3J0czoge30sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG1lbW9yeUltcG9ydCA9IFwibWVtb3J5XCI7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZ2x1ZS5pbXBvcnRzKS5mb3JFYWNoKChpbXBvcnRLZXkpID0+IHtcbiAgICAgICAgICBpZiAoc3RhdGVbaW1wb3J0S2V5XSkge1xuICAgICAgICAgICAgZGVzY3JpcHRpb25JbXBvcnRzLmltcG9ydHNbaW1wb3J0S2V5XSA9IHN0YXRlW2ltcG9ydEtleV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChkcmF3ZXJbaW1wb3J0S2V5XSkge1xuICAgICAgICAgICAgZGVzY3JpcHRpb25JbXBvcnRzLmltcG9ydHNbaW1wb3J0S2V5XSA9IGRyYXdlcltpbXBvcnRLZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZGF0ZXNbaW1wb3J0S2V5XSkge1xuICAgICAgICAgICAgZGVzY3JpcHRpb25JbXBvcnRzLmltcG9ydHNbaW1wb3J0S2V5XSA9IGRhdGVzW2ltcG9ydEtleV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbXBvcnRLZXkgPT09IG1lbW9yeUltcG9ydCkge1xuICAgICAgICAgICAgZGVzY3JpcHRpb25JbXBvcnRzLmltcG9ydHNbaW1wb3J0S2V5XSA9IG1lbW9yeTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG1vZHVsZUNvbXBpbGVkID0gYXdhaXQgV2ViQXNzZW1ibHkuY29tcGlsZShtb2R1bGUpO1xuICAgICAgICBjb25zdCBtb2R1bGVJbnN0YW5jZSA9IGF3YWl0IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKFxuICAgICAgICAgIG1vZHVsZUNvbXBpbGVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uSW1wb3J0c1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHByb2NlZHVyZSA9IG1vZHVsZUluc3RhbmNlLmV4cG9ydHNba2V5XTtcbiAgICAgICAgaWYgKHByb2NlZHVyZSkge1xuICAgICAgICAgIGlmICghb3V0cHV0RWxlbWVudCkge1xuICAgICAgICAgICAgZmFpbHVyZXMucHVzaCh7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgICAgJ0Vycm9yOiBPdXRwdXQgZWxlbWVudCBub3QgZm91bmQuIENsaWNrIFwiUnVuXCIgYWdhaW4gZm9yIHJlLWV2YWx1YXRpb24nLFxuICAgICAgICAgICAgICB0eXBlOiAxMDAsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3V0cHV0RWxlbWVudCkge1xuICAgICAgICAgICAgb3V0cHV0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCB2YWx1ZSA9IHByb2NlZHVyZSgpO1xuXG4gICAgICAgICAgaWYgKG91dHB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dEVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdmUob3V0cHV0KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZSArIFwi8J+YilwiLFxuICAgICAgICAgIHR5cGU6IDEwMCxcbiAgICAgICAgICBwb3NpdGlvbjogMCxcbiAgICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZWplY3Qoe1xuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgIFwiRXJyb3I6IE1pc3NpbmcgbWFpbiBmdW5jdGlvbi4gRXZlcnkgRmxvZ3JhbSBwcm9ncmFtIG11c3QgaW5jbHVkZSBhbiBlbnRyeSBwb2ludCBkZWZpbmVkIGFzIHRoZSBtYWluIGZ1bmN0aW9uLlwiLFxuICAgICAgICB0eXBlOiAxMDEsXG4gICAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgICBsZW5ndGg6IDAsXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG5jb25zdCBydW4gPSAodmFsdWUpID0+XG4gIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgb3V0cHV0ID0gXCJcIjtcbiAgICBjb25zdCBlcnJvcnMgPSBbXTtcblxuICAgIGxldCByZXByZXNlbnRhdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBFTkNPREVSID0gbmV3IFRleHRFbmNvZGVyKCk7XG5cbiAgICBjb25zdCB0b2tlbml6ZXIgPSBuZXcgVG9rZW5pemVyKCk7XG5cbiAgICBjb25zdCBwYXJzZXIgPSBQYXJzZXIuY3JlYXRlKHtcbiAgICAgIHBhdGg6IFwiTW9kdWxlXCIsXG4gICAgICBpbXBvcnRzOiBTSU1QTEVfSU1QT1JUUyxcbiAgICB9KTtcblxuICAgIHBhcnNlci5vbihQYXJzZXIuRVZFTlRfRkFJTCwgKGZhaWx1cmUpID0+IHtcbiAgICAgIGZhaWx1cmVzID0gWy4uLmZhaWx1cmVzLCBmYWlsdXJlXTtcbiAgICAgIHJlcHJlc2VudGF0aW9uID0gbnVsbDtcbiAgICB9KTtcblxuICAgIHBhcnNlci5vbihQYXJzZXIuRVZFTlRfRE9ORSwgKGRhdGEpID0+IHtcbiAgICAgIHJlcHJlc2VudGF0aW9uID0gZGF0YTtcbiAgICB9KTtcblxuICAgIHRva2VuaXplci5vbihcInRva2VuXCIsIChwb3NpdGlvbiwgYXJyYXksIGluZGV4LCBsZW5ndGgpID0+IHtcbiAgICAgIHBhcnNlci5mZWVkKHBvc2l0aW9uLCBhcnJheSwgaW5kZXgsIGxlbmd0aCk7XG4gICAgfSk7XG5cbiAgICB0b2tlbml6ZXIuZmVlZChFTkNPREVSLmVuY29kZSh2YWx1ZSkpO1xuXG4gICAgdG9rZW5pemVyLmRvbmUoKTtcblxuICAgIHBhcnNlci5kb25lKCk7XG5cbiAgICBpZiAocmVwcmVzZW50YXRpb24pIHtcbiAgICAgIGNvbnN0IGNvbXBpbGVyT3B0aW9ucyA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBtZW1vcnk6IHRydWUsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgW2dsdWUsIG1vZHVsZV0gPSBDb21waWxlci5jb21waWxlKHJlcHJlc2VudGF0aW9uLCBjb21waWxlck9wdGlvbnMpO1xuICAgICAgZXhlY3V0ZShnbHVlLCBtb2R1bGUpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImV4ZWN1dGUgcmVzOjo6IFwiLCByZXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXhlY3V0ZSBlcnJvcjo6OiBcIiwgZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7IGVycm9ycywgdmFsdWUgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9jb3VsZG4ndCBwYXJzZSwgcmV0dXJuIHBhcnNpbmcgZXJyb3JzXG4gICAgICByZXR1cm4geyBlcnJvcnMsIHZhbHVlOiBudWxsIH07XG4gICAgfVxuICB9KTtcblxuZXhwb3J0IHtcbiAgcnVuLFxuICBQYXJzZXIsXG4gIFRva2VuaXplcixcbiAgQ29tcGlsZXIsXG4gIE1lbW9yeU1hbmFnZXIsXG4gIERyYXcsXG4gIERhdGVzLFxuICBTSU1QTEVfSU1QT1JUUyxcbn07XG4iXSwibmFtZXMiOlsiVG9rZW5pemVyIiwiUGFyc2VyIiwiQ29tcGlsZXIiLCJjcmVhdGVNZW1vcnlNYW5hZ2VyIiwiTWVtb3J5TWFuYWdlciIsImNyZWF0ZURyYXdlciIsIkRyYXciLCJjcmVhdGVEYXRlIiwiRGF0ZXMiLCJTSU1QTEVfSU1QT1JUUyIsImV4ZWN1dGUiLCJnbHVlIiwibW9kdWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJrZXkiLCJpS2V5IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwicHJvY2VkdXJlcyIsIm5hbWUiLCJwYXRoIiwibWVtb3J5IiwiV2ViQXNzZW1ibHkiLCJNZW1vcnkiLCJpbml0aWFsIiwic3RhdGUiLCJvdXRwdXRFbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZHJhd2VyIiwiZGF0ZXMiLCJkZXNjcmlwdGlvbkltcG9ydHMiLCJmcmVlemUiLCJpbXBvcnRzIiwibWVtb3J5SW1wb3J0Iiwia2V5cyIsImZvckVhY2giLCJpbXBvcnRLZXkiLCJtb2R1bGVDb21waWxlZCIsImNvbXBpbGUiLCJtb2R1bGVJbnN0YW5jZSIsImluc3RhbnRpYXRlIiwicHJvY2VkdXJlIiwiZXhwb3J0cyIsImZhaWx1cmVzIiwicHVzaCIsIm1lc3NhZ2UiLCJ0eXBlIiwicG9zaXRpb24iLCJsZW5ndGgiLCJpbm5lckhUTUwiLCJvdXRwdXQiLCJlIiwicnVuIiwiZXJyb3JzIiwicmVwcmVzZW50YXRpb24iLCJFTkNPREVSIiwiVGV4dEVuY29kZXIiLCJ0b2tlbml6ZXIiLCJwYXJzZXIiLCJjcmVhdGUiLCJvbiIsIkVWRU5UX0ZBSUwiLCJmYWlsdXJlIiwiRVZFTlRfRE9ORSIsImRhdGEiLCJhcnJheSIsImluZGV4IiwiZmVlZCIsImVuY29kZSIsImRvbmUiLCJjb21waWxlck9wdGlvbnMiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/@munezero/floparser/index.js\n"));

/***/ })

});