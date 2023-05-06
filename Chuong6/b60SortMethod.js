/*
        TÌM HIỂU VỀ PHƯƠNG THỨC SORT(sắp xếp) TRONG ARRAY

*/
const random = [1, 1000, 2, 9, 4000];
// !mặc định là sắp xếp theo bảng mã unicode 16
console.log(random.sort());

// todo:    sắp xếp
const random2 = random.sort(function (a, b) {
  if (a > b) return 1; // sắp xếp theo tăng dần
  else return -1; // sắp xếp theo giảm dần
});
console.log(random2);
// ! viết gọn: sắp xếp theo tăng dần
const random3 = random.sort((a, b) => (a > b ? 1 : -1));
console.log(random3);

// ! sắp xếp theo giảm dần
const random4 = random.sort((a, b) => (a > b ? -1 : 1));
console.log(random4);
