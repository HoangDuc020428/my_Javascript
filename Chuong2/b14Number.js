console.log(5 + 7);
console.log(typeof 10);
const number1 = "4.8";
const number2 = "5";

//todo: chuyển kiểu dữ liệu String thành float number
console.log(parseFloat(number1));

//todo: chuyển string thành int number
console.log(parseInt(number2));

// todo: lấy giá trị tuyệt đối
const number3 = -10;
console.log(Math.abs(number3));

// todo: làm tròn lên
const number4 = 4.3;
console.log(Math.ceil(number4));

// todo: làm tròn xuống
console.log(Math.floor(number4));

// todo: làm tròn chuẩn
console.log(Math.round(number4));

/*
todo:rút gọn phần sau số thập phân 
    toFixed(number): number là số chữ số sau dấu phẩy
    toFixed(): xuât ra dạng String -> ta cần đưa về number sử dụng parseFloat
*/
console.log(parseFloat((1 / 3).toFixed(2))); // 0.333333333 ->> 0.33

// todo: làm tròn Math.ramdom(): trong khoảng từ 0->1
console.log(Math.round(Math.random() * 10)); //ramdom từ 0 -> 10 làm tròn

// todo: lấy giá trị max
console.log(Math.max(1, 4, 5, -1, 20));

// todo: lấy giá trị nhỏ nhất
console.log(Math.min(1, 4, 5, -1, 20));

// todo: lũy thừa
console.log(Math.pow(2, 4)); //2^4=16

// ! so sánh isNaN  và Number.isNaN
/*
NaN ->> not a number

*/
console.log(isNaN("this is a string")); //true
console.log(isNaN("12345")); //false

console.log(Number.isNaN("this is a string")); //false
console.log(Number.isNaN("12345")); //false
console.log(Number.isNaN(NaN)); //true
