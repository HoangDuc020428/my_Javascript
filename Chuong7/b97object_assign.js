/*
    TÌM HIỂU VỀ PHƯƠNG THỨC Object.assign
        dùng để gộp 2 object lại với nhau
        systax: Object.assign(name_object1, name_object2,...)
*/
const firstName = {
  firstName: "hoang",
};
const lastName = {
  lastName: "duc",
};
const fullName = Object.assign(firstName, lastName);
console.log(fullName);

// ! có thể sử dụng spread operator
const fullName2 = { ...firstName, ...lastName };
console.log(fullName2);
