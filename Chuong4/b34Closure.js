// todo: CLOSURE CƠ BẢN
/*
        closure là hàm con nằm trong hàm cha thì có thể truy xuất đến scope của hàm cha
    */
//    ví dụ 1
function sayHello() {
  let message = "Hello";
  function yourName(name) {
    console.log(`${message} ${name}`);
  }
  return yourName;
}
let result = sayHello();
result("Duc");

// ví dụ 2
function sayHi(message) {
  return function myName(myName) {
    console.log(`${message} ${myName}`);
  };
}
let result2 = sayHi("Hi");
result2("#duccules");
