/**
 * Find the intruder among 2 arrays
 *
 * @param {string[] | number[]} array1
 * @param {string[] | number[]} array2
 */
export const arraysDiff = (array1, array2) => {
  const intruder = []
  array1 = array1.map(Number)
  array2 = array2.map(Number)

  for (let i in array1) {
    if (array2.indexOf(array1[i]) === -1) intruder.push(array1[i])
  }
  for (let i in array2) {
    if (array1.indexOf(array2[i]) === -1) intruder.push(array2[i])
  }
  return intruder.sort((a, b) => a - b)
}

/**
 * return all the object's properties in float number
 *  
 * @param {object} obj
 * @param {number} digit
 */
export const toFixed = (obj, digit) => {
  for (const key in obj) {
    obj[key] = parseFloat(obj[key].toFixed(digit))
  }
  return obj
}
