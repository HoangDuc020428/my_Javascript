/*
    TÌM HIỂU VỀ PHƯƠNG THỨC filter trong array:
       todo: dùng để sàng lọc trong mảng thõa mãn điều kiện nào đó
 */
const listNum = [1, 4, 6, 5, 8];
const greaterThanThree = listNum.filter((value, index, array) => value > 3);
console.log(greaterThanThree); //[4, 6, 5, 8]
