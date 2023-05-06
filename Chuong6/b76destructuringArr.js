/**
             TÌM HIỂU VÊ destructuring array
             dùng để clear code hơn
  */
const toys = ["ball", " sword", "arrow", "magic", "water"];
const a = toys[0];
const b = toys[1];
const c = toys[2];
console.log(a, b, c);
// khi sử dụng constructuring: syntax: const [index] = nameArr;
const [ball, sword, arrow] = toys;
console.log(ball, sword, arrow);
