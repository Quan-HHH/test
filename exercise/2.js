const add = (n1, n2) => {
  return n1 + n2
}

const add2 = (n1) => (n2) => n1 + n2

console.log(add2(1)(2))
// 1. 执行add(1) 返回函数(n2) => {}
// 2. 执行(n2) => {}(2)

console.log(arg => arg)

function foo() {
  console.log(arguments[3])
}
foo(1,2,3,4)