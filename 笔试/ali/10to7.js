// base10 0 1 2 3 4 5 6
// base7  f c e e 0 2 1

function convert(n) {
  let map = new Map([
    ['0', 'f'],
    ['1', 'c'],
    ['2', 'e'],
    ['3', 'e'],
    ['4', '0'],
    ['5', '2'],
    ['6', '1'],
  ])
  let base7str = ''
  // 先转成七进制的数
  while(n !== 0) {
    base7str = (n % 7).toString() + base7str
    n = (n - n % 7) / 7
  }
  base7str = base7str.split('')
  for(let i = 0; i < base7str.length; i ++) {
    base7str.splice(i, 1, map.get(base7str[i]))
  }
  return base7str.join('')
}

console.log(convert(91))

