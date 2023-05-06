// FUNCTION(HÀM)
/*
        khai báo function decloration
            cú pháp: function functionName(parameters, parameters){
                your code here
            }
            !bị hoisting nên có thể gọi hàm trước khi khai báo
    */
function sum(a, b = 0) {
  const total = a + b;
  return total;
  //không có return thì hàm trả về là undefined
}
console.log(sum(4, 10));
// có thể lưu functuon vào 1 biến
let add = sum; //lưu function sum vào biến add nhưng chưa được gọi

// todo: viết hàm tính trung bình
// tham số nhập vào là 1 function
function average(a, b, fn) {
  const total = fn(a, b);
  return total / 2;
}
const a = 200,
  b = 400;
let result = average(a, b, add);
console.log(`Trung bình ${a} và ${b} là: ${result}`);

/*  // todo: anonymus fuction(Function expression): hàm không có tên
    không bị hoisting nên không được gọi hàm trc khi khai báo
*/
const yourName = function () {
  console.log("your Name:");
};
yourName();

// todo: IIFE(immediately invoked function execution)
(function () {
  console.log("this is IIFE");
})();
