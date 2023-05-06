/**
    2 cách để clone(copy)  mảng
 */
const arr = [1, 2, 5, 67, 8];
// todo   cách 1: sử dụng phương thức slice
const sliceArr = arr.slice();
console.log(sliceArr);
// todo: cách 2: sử dụng spread operator [...array]
const spreadArr = [...arr];
console.log(spreadArr);
