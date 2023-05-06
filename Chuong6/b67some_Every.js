/*
    TÌM HIỂU VỀ PHƯƠNG THỨC some và every trong Array
    giống nhau: đều trả về kiểu boolean
    khác nhau:
        some: trả về true khi có 1 phần tử thõa mãn điều kiện và false khi không có phần tử nào thõa mãn điều kiện
        every: trả về true khi tất cả phần tử đều thõa mãn điều kiện và false khi có một phần tử không thõa mãn 

*/
const listNumber = [1, 4, 6, 3, 7, 8];
console.log("-----array.some------");
const someNumber = listNumber.some((value, index, array) => value > 4);
console.log(someNumber);
console.log("------array.every------");
const everyNumber = listNumber.every((value, index, array) => value > 4);
console.log(everyNumber);
