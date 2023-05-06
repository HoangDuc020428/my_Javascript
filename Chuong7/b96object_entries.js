/*
    TÌM HIỂU VỀ PHƯƠNG THỨC Object.entries
        trả về một mảng nested [[key1, value1],[key2, value2]...] gồm các keys và values của object
        systax: Object.entries(name_object)
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
const entries = Object.entries(student);
console.log(entries);
