const promise1 = new Promise((resolve, reject) => {
  resolve(1)
})

const promise2 = 2

const promise3 = new Promise((resolve, reject) => {
  setTimeout(
    resolve, 100, 3)
})

Promise.all([promise2, promise3, promise1]).then(
  (value) => {
    console.log(value)
  }
)