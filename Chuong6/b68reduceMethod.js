/*
    TÌM HIỂU PHƯƠNG THỨC reduce trong array:
        gom chung các phần tử trong mảng về 1
    syntax: .reduce(function(previousValue, currentValue){
        your code here
    },initialize Value)

 */
// todo: tính tổng các phần tử trong mảng
console.log("-----array.reduce------");
const listNumber = [1, 2, 3, 4, 5];
const total = listNumber.reduce(function (previousNumber, currentValue) {
  return previousNumber + currentValue;
}, 0);
console.log(total);
