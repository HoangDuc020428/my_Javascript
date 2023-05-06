/**
    TÌM HIỂU VỀ CÁC PHƯƠNG THỨC GỘP(MERGE) mảng
    có 2 phương thức 
 */
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
// todo         Cách 1: sử dụng phương thức concat
const mergeArr = arr1.concat(arr2, arr3);
console.log(mergeArr);

// todo          Cách 2: sử dụng phương thức spread operator
const mergeArr2 = [...arr1, ...arr2, ...arr3];
console.log(mergeArr2);
