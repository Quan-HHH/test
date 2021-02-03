function lowerCase(input) {
  return input && typeof input === "string" ? input.toLowerCase() : input;
}

function upperCase(input) {
  return input && typeof input === "string" ? input.toUpperCase() : input;
}

function trim(input) {
  return typeof input === "string" ? input.trim() : input;
}

function split(input, delimiter = ",") {
  return typeof input === "string" ? input.split(delimiter) : input;
}

// 函数组合就是将两个或两个以上的函数组合生成一个新函数的过程
function compose(...funcs) {
  return function (x) {
    console.log(x,'------')
    return funcs.reduce(function (arg, fn) {
      return fn(arg);
    }, x);
  };
}

const trimLowerCaseAndSplit = compose(trim, lowerCase, split);
trimLowerCaseAndSplit(" a,B,C "); // ["a", "b", "c"]