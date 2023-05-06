// STRING: chuỗi
// "helllo worrld"; //double quotes
// "My name is Hoang Duc" // single quote
// `Hoang Đức`; //backticks(template literal)
const name = "Hoang Duc";
console.log(name);
// todo: trả về kiểu dữ liệu
console.log(typeof name);
// todo: sử dụng biến trong JS (C1)
const newStr1 = "My name is " + name;
console.log(newStr1);
// todo: C2 (có thể xuống dòng): thường dùng cách này hơn
const job = "frontend";
const newStr2 = `I am ${job}
I am 22 years old
`;
console.log(newStr2);
// todo: để lấy độ dài của chuỗi ta sử dụng "var.length"
// index tính từ 0
console.log(newStr1.length);
