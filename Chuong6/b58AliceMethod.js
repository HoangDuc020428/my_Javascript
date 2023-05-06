// TÌM HIỂU VỀ PHƯƠNG THỨC Alice: thường dùng để tạo ra một mảng mới dựa vào mảng ban đầu

const myAnimals = ["tiger", "line", "cat", "elephant", "dog", "horse"];

// tạo ra một mảng mới y hệt mảng ban đầu
const myAnimals2 = myAnimals.slice();
console.log(myAnimals2);

// tạo ra một mảng lấy từ vị trí bắt đầu đến cuối
const myAnimals3 = myAnimals.slice(2);
console.log(myAnimals3);

// tạo một mảng lấy từ vị trí bắt đầu đến cuối
const myAnimals4 = myAnimals.slice(1, 5); //!chú ý là lấy đến index 5-1 = 4
console.log(myAnimals4);

// có thể nhập vào giá trị âm
const myAnimals5 = myAnimals.slice(-2); //todo: lấy 2 phần tử cuối cùng trong mảng
console.log(myAnimals5);
