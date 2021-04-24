const arr3 = [
  {
    id: 1,
    name: '111'
  },
  {
    id: 1,
    name: '111'
  },
  {
    id: 2,
    name: '222'
  },
  {
    id: 2,
    name: '666'
  },
  {
    id: 3,
    name: '333'
  },
  {
    name: '444'
  },
  {
    id: 4,
    name: '444'
  },
  {
    id:5,
    name: '555'
  }
];

let arr = []
for(let i of arr3) { 
  if(arr.length === 0 && i.id || arr.every((item) => i.id && item.id !== i.id)) {
    arr.push(i)
  }
}
console.log(arr)
