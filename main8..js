// function descendingOrder(num) {
//   let newStr = String(num)
//   // console.log(newStr)
//   let arry = newStr.split("")
//   // console.log(arry)
//   let decArry = arry.sort(function (a, b) { return b - a })
//   //   console.log(decArry)
//   let joinArry = decArry.join("")
//   //   console.log(joinArry)
//   return joinArry
// }
// console.log(descendingOrder(4785))


function descendingOrder(num) {
  let newStr = String(num)
  let arry = newStr.split("")
  let decArry = arry.sort(function (a, b) {return b - a })
  let joinArry = decArry.join("")
  return joinArry
}
console.log(descendingOrder(30976))







