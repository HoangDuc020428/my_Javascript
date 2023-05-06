/**
    tìm hiểu về BY VALUE và BY REFERENCES 
 */
// todo     by value: giá trị thực sự được lưu trong vùng bộ nhớ
const num1 = 1;
const num2 = 2;
console.log(num1 === num2); //true: do 2 biến có cùng giá trị được lưu trong cùng 1 vùng bộ nhớ
//todo       by references: nói tới vùng bộ nhớ
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); //false: do lưu ở 2 vùng bộ nhớ khác nhau
