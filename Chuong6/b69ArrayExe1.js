/**
    1. Đảo ngược một chuỗi ví dụ: "My name is HoangDuc" =>> Hoang Duc is name my
 */
function reverseArr(myString = "my name is HoangDuc") {
  if (myString.length == 0) {
    return null;
  }
  //   let myarray = myString.split(" ");
  //   let myarray2 = myarray.reverse();
  //   let myString2 = myarray2.join(" ");
  //   return myString2;
  //   todo: viết nhanh
  const result = myString.split(" ").reverse().join(" ");
  return result;
}

console.log(reverseArr());
