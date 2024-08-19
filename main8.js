// function descendingOrder(arry) {
//     let convetArry = []
//     length = arry.length;
//     for (let i = 0; i < length; i++)
//         convetArry.push((arry[i]));
//     return convetArry.sort(function (x, y) { return y - x })
// }
// console.log(descendingOrder([7, 8, 3, 2, 9]))   


function descendingOrder(num) {
    let newStr = String(num)    //convetArry num to str
    let arry = newStr.split("")  //convetArry str to Arry
    // console.log(arry);
    let decArry = arry.sort(function (x, y) { return y - x })  //using sort method for desce
    let joinArry = decArry.join("")  //using join method for joing the arry
    return joinArry
}
console.log(descendingOrder(863579))