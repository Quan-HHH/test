function shuffle(arr) {
  let len = arr.length
  for(let i = 0; i < len; i ++) {
    let idx = Math.floor(Math.random() * (len - i));
    [arr[len - i - 1], arr[idx]] = [arr[idx], arr[len - i - 1]]
  }
  console.log(arr)
}


shuffle([1,2,3,4,5,6,7,8])