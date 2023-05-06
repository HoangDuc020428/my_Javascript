// !Bài 1: viết function tìm so sánh 2 số a và b tìm ra số lớn hơn
function comparator(a, b) {
  if (a > b) {
    console.log(`${a} lớn hơn ${b}`);
  } else if (a < b) {
    console.log(`${b} lớn hơn ${a} `);
  } else {
    console.log(`${a} bằng ${b}`);
  }
  return 0;
}
const a = 5,
  b = 5;
comparator(a, b);

// todo: cách khác
function compare(a = 0, b = 0) {
  if (typeof a != "number" || typeof b != "number") {
    console.log("enter number, please!");
    return;
  }
  return Math.max(a, b);
}
console.log(compare("100", "abc"));

// !Bài 2: In hoa chữ cái đầu tiên trong ví dụ: duc -> Duc, CULES-> Cules
function capitalize(word = "") {
  if (word.length === 0) {
    return null;
  }
  //   todo: biến tất cả các ký tự về chữ in thường, sau đó lấy ký tự đầu tiên bằng phương thức charAt(0), tiếp theo in hoa ký tự bằng phương thức toUpperCase + với các ký tự còn lại chữ thường và sử dụng slice(1) để cắt từ vị trị 1 đến cuối
  let newWord =
    word.toLowerCase().charAt(0).toUpperCase() + word.toLowerCase().slice(1);
  return newWord;
}
console.log(capitalize("DUC"));

// !Bài 3: viết hàm có sử dụng callback (function là parameter của function khác) in ra kết quả của hàm compare đã viết ở trên
function useCallBack(a, b, fn) {
  let max = compare(a, b);
  fn(max);
}
function print(number) {
  console.log(`Max number is ${number}`);
}
// console.log(useCallBack(100, 499, print));
useCallBack(100, 500, print);
