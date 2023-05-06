/*
    Tìm hiểu về optinal Chainning 
        giúp code gọn hơn
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
console.log(student.fullName); // nếu không có => undefined
console.log(student.fullName.name); // nếu không có sẽ báo lỗi: annot read properties of undefined (reading 'name')

// todo: kiểm tra điều kiện(viết bình thường)
if (student.fullName) {
  if (student.fullName.name) {
    console.log(student.fullName.name);
  }
}

// todo:viết theo  optional chainning
console.log(student.fullName?.name);
