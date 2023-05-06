/*
    TÌM HIỂU VỀ PHƯƠNG THỨC Object.keys
        trả về một mảng gồm các key của object
        syntax: Object.keys(name_object);
*/
const student = {
  name: "hoang duc",
  age: 22,
  gender: "male",
  resident: "thanh hóa",
  hi: function () {
    console.log("hi");
  },
};
console.log(Object.keys(student));
