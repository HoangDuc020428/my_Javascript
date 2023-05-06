/*
        TÌM HIỂU VỀ PHƯƠNG THỨC FIND TRONG ARRAY
            trả về phần tử đầu tiên trong mảng thõa mãn một điều kiện nào đó

*/
const myNumber = [2, 50, 29, 1000, 100, 30];
const findNumber = myNumber.find((element) => element > 10);
console.log(findNumber);
//nếu không tìm thấy trả về undefined
