/*
    CÁCH SO SÁNH 2 MẢNG
    sử dụng kiểu dữ liệu: JSON (javascript object notation)
    JSON có 2 phương thức: 
        JSON. stringify(value) -> convert giá value sang dạng JSON string
        JSON.parse(value)
    !sự khác nhau giữa JSON.stringify và toString
        [1,2,3].toString => "1,2,3"
        JSON.stringify([1,2,3]) => "[1,2,3]";
        JSON.parse("[1,2,3]") => [1,2,3];
 */
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.parse("[1,2,3]"));
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arrStr1 = JSON.stringify(arr1);
const arrStr2 = JSON.stringify(arr2);
console.log(arrStr1 === arrStr2);
