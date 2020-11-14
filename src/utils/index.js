
export const arraysDiff = (array1, array2) => {
  var intruder
  array1 = array1.toString().split(',').map(Number)
  array2 = array2.toString().split(',').map(Number)

  for (let i in array1) {
    if (array2.indexOf(array1[i]) === -1) intruder = array1[i]
  }
  for (let i in array2) {
    if (array1.indexOf(array2[i]) === -1) intruder =array2[i]
  }
  return intruder
}

// export const arraysDiff = (array1, array2) => {
//   var temp = []
//   array1 = array1.toString().split(',').map(Number)
//   array2 = array2.toString().split(',').map(Number)

//   for (let i in array1) {
//     if (array2.indexOf(array1[i]) === -1) temp.push(array1[i])
//   }
//   for (let i in array2) {
//     if (array1.indexOf(array2[i]) === -1) temp.push(array2[i])
//   }
//   return temp.sort((a, b) => a - b)
// }