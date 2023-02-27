// ? question1: Divide the elements in array1 with elements in array2 respectively and store their results in a new array.

let array1 = [20, 46, 90, 80, 120];
let array2 = [2, 2, 5, 4, 2];

let newArray = array1.map(function (num, index){
  return num / array2[index];
})
document.write(newArray + '<br>')


// ? Question 2:Multi dimensional Arrays
var arr = [
  [1, 2, 3],
  [4, 5, 6],
  7,
  8,
  9,
  [[10, 11, 12, [13, 4, 112]], 136, 14],
];
// *print out these numbers (10,8,13,136 and 4)from the array provided above using for loop

var arr = [
  [1, 2, 3],
  [4, 5, 6],
  7,
  8,
  9,
  [[10, 11, 12, [13, 4, 112]], 136, 14],
];

for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr[i].length; j++){
    document.write(arr[i][j] + "<br>")
  }
}
document.write(arr[5][0][0] + ',');
document.write(arr[3] + ',')
document.write(arr[5][0][3][0] + ',')
document.write(arr[5][1] + ',');
document.write(arr[5][0][3][1]);


 
