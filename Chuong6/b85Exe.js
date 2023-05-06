/*
    1. Cho một mảng gồm nhiều giá trị [1, 1000, false, true, null, "hoangduc", undefined, [1, 2, 3]]. Viết phương trình loại bỏ các giá trị là falsey và giữ lại các giá trị là truthy (falsy: 0, null, undefine, false, "", NaN)
    2. cho một mảng phức tạp [[1, 2, 3, [false, true]], [1, 5, 6, ["javascript"]],[88, 66, [90]]]. và kết quả mong muốn là [1, 2, 3, false, true, 1, 5, 6, "javascript",88, 66, 90]
    3. đảo ngược một số nguyên ví dụ: 1234 -> 4321
    4. Viết chương trình có tên là fizzbuzz nhập vào số nguyên, và cho chạy từ 1 đến số nguyên đó nếu chia hết cho 2 thì in ra fizz, chia hết cho 3 thì in ra buzz và nếu chia hết cho cả 2 và 3 thì in ra fizzbuzz nếu không in ra số đó 
    5. Cho một chuỗi bất kỳ đếm số ký tự nguyên âm (u e o a i) - vowels trong chuỗi đó
    6. Cho một mngar bất kỳ viết hàm trả về một mảng mà xóa đi các phần tử trùng nhau
    7. Viết một fuction sử lý một mảng lớn thành nhiều mảng con dựa vào số nguyên đầu vào. Ví dụ: ([1,2,3,4,5],2) => [[1,2],[3,4],[5]] 
*/
// todo: Bài 1
console.log("-------------- Bài 1-------------");
const myArr = [1, 1000, false, true, null, "hoangduc", undefined, [1, 2, 3]];
const result = [];
for (let i = 0; i < myArr.length; i++) {
  if (Boolean(myArr[i]) === true) {
    result.push(myArr[i]);
  }
}
console.log(result);
// cách khác: sử dụng boolean(item)
const filterFalsy = myArr.filter((item) => Boolean(item));
console.log(filterFalsy);

// todo:    bài 2
console.log("-------------- Bài 2-------------");

const complexArr = [
  [1, 2, 3, [false, true]],
  [1, 5, 6, ["javascript"]],
  [88, 66, [90]],
];
// ! sử dụng flat(number) : với number là số cấp tối đa trong một mảng
// search: flatten array
const result2 = complexArr.flat(2);
console.log(result2);

// todo:        bài 3
/*
    Math.sign(1000) = 1
    Math.sign(-100) = -1
*/
console.log("-------------- Bài 3-------------");
function reverseNumber(number) {
  const value =
    parseInt(number.toString().split("").reverse().join("")) *
    Math.sign(number);
  console.log(value);
}
reverseNumber(-1234);

// todo:        bài 4
console.log("-------------- Bài 4-------------");
function fizzbuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log("fizzbuzz");
    } else if (i % 2 === 0) {
      console.log("fizz");
    } else if (i % 3 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
fizzbuzz(10);

// todo     bài 5
console.log("-------------- Bài 5-------------");

function countVowels(myStr) {
  //  ! cách 1
  let count1 = 0;
  const lowerStr = myStr.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    if (
      lowerStr[i] === "u" ||
      lowerStr[i] === "e" ||
      lowerStr[i] === "o" ||
      lowerStr[i] === "a" ||
      lowerStr[i] === "i"
    ) {
      count1++;
    }
  }
  console.log(count1);
  // !cách 2
  let count2 = 0;
  const characters = "ueoai";
  for (let c of myStr.toLowerCase()) {
    if (characters.includes(c)) count2++;
  }
  console.log(count2);
}

countVowels("HOanGDUC");

//
console.log("-------------- Bài 6-------------");
function unique(arr) {
  const result = [];
  // ! sử dụng object để kiểm tra xem đầu vào có phải là mảng hay không: Array.isArray(nameArr)
  if (!Array.isArray(arr)) return result;
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(unique([1, 2, 3, 4, 1, 4, 5, 4, 5, 4, 6, 2, 5]));

console.log("-------------- Bài 7-------------");
function splitArray(myArr, number) {
  const result = [];
  for (let i = 0; i < myArr.length; i += number) {
    result.push(myArr.slice(i, number + i));
  }
  console.log(result);
  return result;
}

splitArray([1, 2, 3, 4, 5, 6], 4);
