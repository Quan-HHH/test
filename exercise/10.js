// function fearNotLetter( str ) {
//   let res = ''
//   let count = 0
//   str = str.toLowerCase()
//   fromCharCode('a')
//   for(let i = 0; i < str.length; i ++) {
//     if(str[i] !== letter[i + count]) {
//       res += letter[i + count]
//       count ++
//       i --
//     }
//   }
//   return res === '' ? undefined : res
// }

function fearNotLetter( str ) {
  for(let i = 0; i < str.length; i++) {
    // console.log(str.charCodeAt(i))
    if(str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1)
    }
  }
  return undefined
}

console.log(fearNotLetter('abce'))