Function.prototype.myBind = function(context) {
  let self = this
  const args1 = [...arguments].slice(1)
  return function() {
    const args2 = [...arguments]
    return self.apply(context, args1.concat(args2))
  }
}

function show() {
  // console.log(this.name);
  console.log(this.name, ...arguments);
}

var a = show.myBind({
  name: 'wjf'
}, 1, 3, 3, 4, 5, 6, 7, 8, 9, 0);
a(777);