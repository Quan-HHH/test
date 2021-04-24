
// 请实现find函数，使下列的代码调用正确。
// 约定：
// title数据类型为String
// userId为主键，数据类型为Number
var data = [
  {userId: 8, title: 'title1'},
  {userId: 11, title: 'other'},
  {userId: 15, title: null},
  {userId: 19, title: 'title2'}
];

// Array.prototype.where = function() {
//   console.log(arguments)
//   return this
// }

var find = function(origin) {
  // coding here
  return function where() {
    return function orderBy() {
      console.log(arguments)
    }
  }
}
//查找data中，符合条件的数据，并进行排序
var result = find(data).where({
  "title": /\d$/
}).orderBy('userId', 'desc');

console.log(result); // [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];