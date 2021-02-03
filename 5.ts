// 现已知一个字符串是由正整数和加减乘除四个运算符(+ - * /)组成

// 例如存在字符串 const str = '11+2-3*4+5/2*4+10/5'，
// 现在需要将高优先级运算，用小括号包裹起来，例如结果为 '11+2-(3*4)+(5/2*4)+(10/5)'。
// 注意可能会出现连续的乘除运算，需要包裹到一起。

// const bracketAdder = (str: string):string => {
//   const reg: RegExp = /(\d+(\*|\/))+\d+/g;
//   return str.replace(reg,(p1) => `(${p1})`)
// }
// console.log(bracketAdder('11+2-3*4+5/2*4+10/5'))

function foo(str: string): string {
  return str.replace(/(\d+(\*|\/))+\d+/g, (p2) => `(${p2})`)
}

console.log(foo('11+2-3*4+5/2*4+10/5'))