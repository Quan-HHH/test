Function.prototype.myCall = function(context) {
  context = context || window
  context.fn = this
  args = [...arguments].slice(1) // slice返回的是删除的元素组成的数组 原数组不变

  let res = context.fn(args)
  delete context.fn
  return res
}

function foo(age) {
  console.log(this.name, age)
}

foo.call({name: 'qjx'}, 18)