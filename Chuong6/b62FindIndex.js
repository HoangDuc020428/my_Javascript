/*
    TÌM HIỂU VỀ PHƯƠNG THỨC findIndex trong array
        trả về vị trí của phần tử đầu tiên thõa mãn điều kiện nào đó

*/
const myNumber = [1, 5, 2, 10, 59, 100];
const yourIndexNumber = myNumber.findIndex(
  (element, index) => element > 10 && index > 3
);
console.log(yourIndexNumber);

// ! nếu không tìm thấy sẽ trả về -1
