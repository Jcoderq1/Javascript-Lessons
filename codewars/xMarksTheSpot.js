function xMarksTheSpot(matrix) {
  let newArr = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix.length == 0) {
        return [];
      } else if (matrix[i][j] === "x") {
        newArr.push(i, j);
      }
    }
  }
  return newArr.length > 2 ? [] : newArr;
}

xMarksTheSpot([]);
//let y = o if i is less than 1 let y [ ]
