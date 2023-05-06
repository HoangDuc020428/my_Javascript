/*
    TÌM HIỂU VỀ destructring object 
*/
const student = {
  name: "hoang duc",
  age: 22,
  gender: "male",
  hello: function () {
    console.log("hello");
  },
  fullName: {
    name: "Duc123",
  },
};
// todo: Normal
// const name = student.name;
// const age = student.age;
// const gender = student.gender;
// console.log(name, age, gender);

// todo: sử dụng destructring object
// const { name, age, gender } = student;
// console.log(name, age, gender);

// todo:  rest parameter: lấy ra các key còn lại
const { name, age, gender, ...rest } = student;
console.log(rest);

// !dùng trong function
// todo: normal function
// function whatYourInfo(name, age, gender) {
//   console.log(name, age, gender);
// }
// whatYourInfo("Duc", 22, "male"); //chúng ta cần nhớ đúng thứ tự của các parameter

// todo: destructring function
// function whatYourInfo({ name, age, gender }) {
//   console.log(name, age, gender);
// }
// whatYourInfo({
//   gender: "male",
//   name: "Duc",
//   age: 22,
// });

// todo: parameter object
function whatYourInfo(obj) {
  console.log(obj.name, obj.age, obj.gender);
}
whatYourInfo(student);
