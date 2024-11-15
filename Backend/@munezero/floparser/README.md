# Flogram Compiler and Parser

[Flogram](https://flogram.dev) is a programming language designed to help AI write less error-prone code.

## Installation

To use the Flogram npm package, run the command below:

```
npm install "@munezero/floparser"
```

## Usage

After you have installed the package, there are a couple of things to do to compile your Flogram code:

### Import runner function

Import the runner function from the package like so:

```
import { runner } from '@munezero/floparser';
```

### Call runner with necessary paramaters

`runner` takes two arguments, value, the code to be run, and outputElement, which is a HTML element where the draw values will be printed.

```
const { result, failures} = await runner({ value : value, outputElement: outputElement });

```

### Keep in mind

- `value` is a string, the code you are looking forward to executing.
- `outputElement` is a necessary valid HTML element if you want to see the ouput on your screen, or else, it will be on the console.
- The `runner` will always be looking for the `main` function to execute your code.
- The `result` from runner is the value that might have been returned by the main function after execution.
- `result` is an optional value depending on whether our code executed well, or your main function has a return value.
- `failures` is an array, it will be empty if there were no issues with your code.

Happy Flogram-ming!
