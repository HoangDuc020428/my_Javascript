/*
    TÌM HIỂU VỀ PHƯƠNG THỨC Object.seal
        cho phép chỉnh sử key: value nhưng không cho phép thêm
        systax: Object.seal(name_object)
*/
const student = {
  name: "hoang duc",
};
const newStudent = Object.seal(student);
newStudent.name = "duccules";
newStudent.lastName = "duc"; //không thể thêm key: value
console.log(newStudent);
