/*
    TÌM HIỂU VỀ TỪ KHÓA `this` trong Object
    (sẽ học kỹ hơn ở chương nâng cao)
*/
const student = {
  name: "Hoang Duc",
  age: 22,
  gender: "male",
  hello: function () {
    console.log(`My name is ${this.name}, I'm ${this.age} years old!`);
  },
};
student.hello();
