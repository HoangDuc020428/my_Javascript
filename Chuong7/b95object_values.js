/*
    TÌM HIỂU VỀ PHƯƠNG THỨC Object.values
        trả về một mảng gồm các values của object
        systax: Object.values(name_object)
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
console.log(Object.values(student));
