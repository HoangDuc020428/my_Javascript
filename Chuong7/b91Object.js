/*
    TÌM HIỂU VỀ object 
    có 2 cách khai báo object:
        object literal (sử dụng cách này nhiều hơn)
        object consutructor
*/
const objectLiteral = {};
const objectContructor = new Object();
const student = {
  // key(property): value
  name: "Hoang Duc",
  age: 22,
  male: true,
  "last-name": "ducules", //khai báo đặc biệt chỉ có thể sử dụng bracket để truy xuất
  //   hàm được sử dụng trong object được gọi là method
  hi: function () {
    console.log("hi");
  },
};

/*
    todo: truy xuất
    có 2 cách:
        dot notation(sử dụng dấu chấm)
        bracket notation
*/
console.log(student.name); //dot
console.log(student["age"]); //bracket
console.log(student["last-name"]);

// todo: thay đổi value của object
student.age = 25;
console.log(student);

// todo: thêm vào object
student.isFrontend = true;
student["is-frontend"] = false;
student.hello = function () {
  console.log("hello");
};
console.log(student);

// todo: xóa key khỏi object
delete student["last-name"];
console.log(student);
