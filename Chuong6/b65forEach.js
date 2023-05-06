/*
    TÌM HIỂU VỀ PHƯƠNG THỨC forEach trông Array:
        duyệt qua từng phần tử trong mảng và không trả về mảng mới trong forEach không có return
    ! Sự khác nhau giữa forEach và map?
        - trong map có reuturn còn forEach thì không, nên forEach sẽ chạy mãi mà không dừng được
        - Map trả về một mảng mới còn forEach thì không
    systax: .forEach(callbackfn(value, index, array))
*/
const listNumber = [1, 2, 3, 6, 7];
const listNumberTripple = listNumber.forEach((value, index, array) => {
  return value * 3;
});
console.log(listNumberTripple); //undefined
// -----------------------------------------------
const array1 = [1, 2, 3];
array1.forEach((element) => console.log(element * 2));
