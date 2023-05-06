// TÌM HIỂU VỀ PHƯƠNG THỨC SPLICE(splais): nó sẽ xóa phần tử trong mảng hoặc thay thể phần tử trong mảng
const myAnimals = ["dog", "cat", "bird", "dragon"];

//todo:    lấy từ vị trí 1
// const myAnimals2 = myAnimals.splice(1);
// console.log(myAnimals);

//todo:     splice(start, deleteCount): deleteCount số lượng phần tử xóa hoặc thay thế
// const myAnimals3 = myAnimals.splice(1, 3);
// console.log(myAnimals);

// todo:            splice(start, deleterCoutn, item1, item2,...)
const myAnimals4 = myAnimals.splice(1, 2, "pig", "dinasour");
console.log(myAnimals);
