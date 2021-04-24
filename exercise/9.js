function remove( arr ,  item ) {
  let newArr = arr.filter((i, index) => {
    return i !== item
  })
  console.log(newArr)
}

remove([1, 2, 3, 4, 2],2)