/**
    bài tập về vòng lặp for
    1. sao chép mảng dùng vòng lặp for
    2. đảo ngược chuỗi string
 */
const myArr = [1, 2, 3, 4, 5, 6, 7];
const copyArr = [];
for (let i = 0; i < myArr.length; i++) {
  copyArr.push(myArr[i]);
}
console.log(copyArr);

const myStr = "i love you";
let result = "";
for (let i = myStr.length - 1; i >= 0; i--) {
  result = result + myStr[i];
}
console.log(result);
