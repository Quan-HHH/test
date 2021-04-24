// 实现一个对象的 flatten 方法，如下

const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 },
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3,
};
const composeTheArray = arr => {
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        if (/^\[\d+\]$/.test(ele)) {
            res += ele
        }else{
            res += `.${ele}`
        }
    }
    if (res[0] === '.') {
        res = res.slice(1)
    }
    return res;
}
const foo = (obj) => {
  const resObj = {};
  const helper = (path, copyObj) => {
    if (typeof copyObj === "object") {
      if (Array.isArray(copyObj)) {
          for (let i = 0; i < copyObj.length; i++) {
              path.push(`[${i}]`)
              helper(path,copyObj[i])
              path.pop()
          }
      } else {
        let objKeys = Object.keys(copyObj);
        for (const key of objKeys) {
          path.push(key);
          helper(path, copyObj[key]);
          path.pop();
        }
      }
    } else {
      const key = composeTheArray(path);
      resObj[key] = copyObj;
    }
  };
  Object.keys(obj).forEach((key) => {
    helper([key], obj[key]);
  });
  return resObj;
};
console.log(foo(obj));
// flatten(obj) 结果返回如下
// {
//  'a.b': 1,
//  'a.c': 2,
//  'a.d.e': 5,
//  'b[0]': 1,
//  'b[1]': 3
//  'b[2].a': 2,
//  'b[2].b': 3
//   c: 3
// }