/**
        TÌM HIỂU VỀ rest parameter 
 */
const toys = ["ball", " sword", "arrow", "magic", "water"];
// todo: khi chúng ta sử dụng destructuring
// const [ball, sword, arrow] = toys;

// làm sao để chúng ta lấy các phần tử còn lại =>> sử dụng rest parameter
const [ball, ...rest] = toys;
console.log(ball, rest);
// có thể dùng trong function
function demo(a, ...rest) {
  console.log(a, rest);
}
demo(1, 2, 3, 4, 5);
