var getRow = function(rowIndex) {
  let result = [];
  if (rowIndex === 0) {
    result = [1];
  } else if (rowIndex === 1) {
    result = [1, 1];
  } else if (rowIndex > 1) {
    function factorialize(num) {
      if (num < 0) {
        return -1;
      } else if (num === 0) {
        return 1;
      } else {
        return num * factorialize(num - 1);
      }
    }

    for (let i = 0; i < rowIndex; i++) {
      result.push(
        factorialize(rowIndex) / (factorialize(i) * factorialize(rowIndex - i))
      );
    }
    result.push(1);
  }

  return result;
};

//k <=33; k>=0
//what does a pascal's triangle look like?
//0..............1
//1............1, 1
//2..........1, 2, 1
//3.........1, 3, 3, 1
//4.......1, 4, 6, 4, 1
//5.....1, 5, 10, 10, 5, 1
//6...1, 6, 15, 20, 15, 6, 1
//7..1, 7, 21, 35, 35, 21, 7, 1
//8.1, 8, 28, 56, 70, 56, 28, 8, 1
//9.
//10
//...predicting 33
//1, 33, .. 33, 1

console.log(getRow(0) + " should return [1]");
console.log(getRow(1) + " should return [1, 1]");
console.log(getRow(2) + " should return [1, 2, 1]");
console.log(getRow(3) + " should return [1, 3, 3, 1]");
console.log(getRow(4) + " should return [1, 4, 6, 4, 1]");
console.log(getRow(5) + " should return [1, 5, 10, 5, 1]");
console.log(getRow(6) + " should return [1, 6, 15, 20, 15, 6, 1]");
