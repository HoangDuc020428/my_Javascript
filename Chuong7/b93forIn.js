/*
    for in trong object: lấy ra các key và value của object 
*/
const student = {
  name: "Hoang duc",
  age: 22,
  date: "28/04/2002",
};
for (let key in student) {
  console.log(key);
}
