const _ = require('lodash')

 const channelCodeOptions = [
  {
    label: '微信小程序',
    value: 'WECHAT'
  },{
    label: '支付宝小程序',
    value: 'ALIPAY'
  },{
    label: 'H5',
    value: 'H5'
  },{
    label: '京东小程序',
    value: 'JD'
  }
];

const obj = {
  ALIPAY: '支付宝小程序',
  H5: 'H5',
  WECHAT: '微信小程序',
  JD: '京东小程序',
};

let o = _.find(channelCodeOptions, function(item) {
  return item.label === '微信小程序'
}).value
console.log(o)

const foo = (obj) => {
  const channelCodeOptions = []
  for(let item in obj) {
    channelCodeOptions.push({
      label: obj[item],
      value: item
    })
  }
  return channelCodeOptions
}

console.log(foo(obj))

const arr = Object.keys(obj).map(item => {
  return {
    label: obj[item],
    value: item
  }
})

// const arr = []
// Object.keys(obj).forEach(item => {
//   arr.push({
//     label: item,
//     value: obj[item]
//   })
// })
console.log(arr)

const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}
kitty.sex = 'nan'
console.log(kitty)

let [first, second] = [1]
console.log(first, second)

