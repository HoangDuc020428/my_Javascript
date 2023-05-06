/*
        Tìm hiểu về phương thức map trong array

            duyệt qua từng phần tử trong mảng và trả về một mảng mới và không thay đổi mảng ban đầu
*/
const listNumber = [1, 2, 4, 5, 7];
// todo: trả về một mảng mới mà các giá trị trong mảng cũ nhân 2
/*
    systax: .map(callbackfn(value, index, array))
    value: giá trị của phần tử trong mảng cũ
    index: vị trí từng phần tử trong mảng cũ
    array: tên mảng cũ
 */

const listNumberDouble = listNumber.map((value, index, array) => value * 2);
console.log(listNumberDouble);
