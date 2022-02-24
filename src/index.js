module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) return [];
 
    return matrix.reduce((acc, currentArray, index) => {
      if (index % 2 === 0) {
        return acc.concat(currentArray)
      } else {
        return acc.concat(currentArray.reverse())
      }
    }, []);
}
