// CÁC PHƯƠNG THỨC HAY ĐƯỢC SỬ DỤNG TRONG MẢNG
const students = ["hoang", "ngoc", "duc", "huy", "dung", "hue", "duc"];

// lấy độ dài của mảng (arrayName.length)
console.log(students.length);

// đảo ngược giá trị của mảng(arrayName.reverse())
// console.log(students.reverse());

// nối các giá trị của mảng thành string
console.log(students.join());
console.log(students.join(" "));

//tìm vị trí của phần tử tìm thấy đầu tiên trong mảng
console.log(students.indexOf("duc"));

//tìm vị trí của phần tử cuối cùng tìm thấy trong mảng
console.log(students.lastIndexOf("duc"));

// thêm phần tử vào cuối mảng
students.push("js");
console.log(students);

// thêm phần tử vào đầu mảng
students.unshift("Frontend");
console.log(students);

// xóa phần tử cuối cùng trong mảng
students.pop();
console.log(students);

// xóa phần tử đầu tiên trong mảng
students.shift();
console.log(students);
