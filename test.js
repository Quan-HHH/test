var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      console.log('---')
      yield item;
    }
  }
};

for(f of flat(arr)) {  // Generator 函数返回的遍历器对象，所以可以这样用
  console.log(f)
}