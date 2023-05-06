// GIỚI THIỆU VỀ MẢNG
/*
    Có 2 cách khai báo mảng
        array literal: được sử dụng nhiều hơn
        array contructor 
    index: bắt đầu từ 0
    length: đếm từ 1
*/
const students = ["duc", "hoang", "ngoc", "huy"];
const students2 = new Array();
// lấy phần tử trong mảng dựa vào index
console.log(students[2]);
// độ dài của mảng
console.log(students.length);
// lấy phần tử cuối cùng dựa vào length
console.log(students[students.length - 1]);
