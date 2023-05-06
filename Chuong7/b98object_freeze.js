/*
TÌM HIỂU VỀ PHƯƠNG THỨC Object.freeze
    ngăn chặn việc chỉnh sửa key và value của object
    systax: Object.freeze(name_object)
*/
const car = {
  brand: "Mercedes",
};
const newCar = Object.freeze(car);
newCar.brand = "BMW";
console.log(newCar);
