let arr = [1, 2, 3, [4, 5, 6, [7, [8, [{name: '31321'}, ['asd']]]]]]
// 一层的时候可以这样拍平 那么多层呢 递归！
console.log(arr.reduce((prev, cur) => {
  return prev.concat(cur)
}, []))

Array.prototype.flat = function (d) {
  if (d > 0) {
    return this.reduce((prev, cur) => {
      return prev.concat(Array.isArray(cur) ? cur.flat(d - 1) : cur)
    }, [])
  }
  else return this
}

console.log(arr.flat(3))

console.log(arr.toString().split(',').map((item) => {
  return isNaN(item) ? item : Number(item)
}))

// 用generator的方法试试
function* flat(arr) {
  for (let item of arr) {
    Array.isArray(item) ? yield* flat(item) : yield item
  }
}
let arr1 = []
for (let item of flat(arr)) {
  arr1.push(item)
}
console.log(arr1)