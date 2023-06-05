//A strobogrammatic number is a number whose numeral is rotationally symmetric, so that it appears the same when rotated 180 degrees.

//function for the given integer is strobogrammatic number or not
function is_Strobogrammatic(n) {
    //if n == null Or n.length() == 0 then return true
  if (n == null || n.length() == 0) {
   return true;
  }
//initialize variable map to iterate object by putting
  let map = new Map();
  map.put('6', '9');
  //initialize left at 0 and right at length of n decresed by 1 to one step back if more object is their
  let left = 0;
  //decrement
  let right = n.length() - 1;
  //if left <= right then check (!map.containsKey(n.charAt(right)) Or n.charAt(left) not equal to map.get(n.charAt(right)) then it return false
  while (left <= right) {
   if (!map.containsKey(n.charAt(right)) || n.charAt(left) != map.get(n.charAt(right))) {
    return false;
   }
   //then increment in the left side and decrement in the right side
   left++;
   right--;
  }
  return true;
 };
 //print true if integer are rotaional and symetric
console.log(is_Strobogrammatic());
