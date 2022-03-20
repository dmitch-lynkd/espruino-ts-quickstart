// In the interest of preserving some flash space, the Espruino team opted to not implement
// all of Javascripts built in functions in the Espruino's Javascript interpreter.
// So here is where we can write our own implementations.
// After compilation, these will be concatenated into the beginning of app.js

export {}; // to make this a module

declare global {
  // to access the global type String
  interface String {
    concat(strings: string[]): string;
  }
}

// the actual code
String.prototype.concat = function (...strings: (string | string[])[]) {
  let str = this;
  strings.forEach((x) => {
    str = str + x.toString();
  });
  return str.toString();
};
