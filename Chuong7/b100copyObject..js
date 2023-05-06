/*
    TÌM HIỂU VỀ CÁCH SAO CHÉP MỘT OBJECT
        - dùng phương thức spread operator(tương tự như array)
        - dùng object.assign (nhưng pp này không thể clone object nested(object trong object nên chỉ sử dụng cho object đơn giản) )
        - dùng JSON 
 */
const user = {
  userName: "hoangduc",
  school: {
    name: "lio messi",
    room: {
      name: "IT",
    },
  },
};
// const newUser = user; // không nên gán như này vì thay đổi sẽ bị thay đổi cả hai
const newUser = { ...user };
newUser.userName = "duccules";
console.log("-----user----");
console.log(user);
console.log("----sprea Operator User-----");
console.log(newUser);

// todo: sử dụng phương pháp Object.asign
// const assignUser = Object.assign({}, user);
// assignUser.school.name = "Duc123"; //câu lệnh này làm cho school.name trong user cũng thay đổi thành Duc123 nên không thể dùng cách này
// console.log(user);
// console(assignUser);

//todo: sử dụng JSON
const jsonUser = JSON.parse(JSON.stringify(user));
jsonUser.school.name = "Duc234";
console.log(user);
console.log(jsonUser);
