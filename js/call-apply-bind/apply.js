Function.prototype.myApply = function(context) {
  context = context || window
  context.fn = this
  let args = arguments[1]
  let res = ontext.fn(...args)
  delete context.fn
  return res
}

function foo(age,ages) {
  console.log(this.name, age, ages)
}

foo.apply({name: 'qjx'}, [18,19])