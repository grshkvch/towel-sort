
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix.length == 0) {
    return []
  } else {
    return matrix.reduce((acc, currentArray, index) => {
      if (index % 2 === 0) {
        return acc.concat(currentArray)
      } else {
        return acc.concat(currentArray.reverse())
      }
    }, []);
  }

  
}
