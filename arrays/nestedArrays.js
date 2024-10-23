const arr = [];
const arr2 = [1, 2, 3];
const arr3 = [4, 5, 6, ["hello"]];

arr.push(arr2);
arr.push(arr3);
console.log(arr[1][3][0]);
// here we put arr2 and arr3 into arr
// to access the arr we do arr[0] which will access the array index we choose,
// if we want to acces an element inside the array we do arr[0][2]
