//Complexity
//Time Complexity: O(N)
//Auxiliary Space: O(1)


//Function to check if a straight line can be formed using N points
let checkStraightLine = function (coordinates) {
    //First pair of point (x0, y0) and Second pair of point (x1, y1) cordinates of the staraigt line
  let a = -(coordinates[1][1] - coordinates[0][1]);
  let b = coordinates[1][0] - coordinates[0][0];
  return coordinates.every(
    (item) =>
      a * (item[0] - coordinates[0][0]) + b * (item[1] - coordinates[0][1]) === 0);
};

console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
);
