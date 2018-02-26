/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var res = new Set();
    preferences.forEach((value, index, array) => {
      var whoLovesTheFirst = array[value - 1];
      var whoLovesTheSecond = array[whoLovesTheFirst - 1];
      var whoLovesTheThird = array[whoLovesTheSecond - 1];
      if (whoLovesTheThird == value) {
        [value, whoLovesTheFirst, whoLovesTheSecond].map(value => res.add(value));
      }
    });
    return Math.floor(res.size / 3);
  };
  