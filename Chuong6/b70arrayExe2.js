/**
    2. Đảo ngược các ký tự trong chuỗi
    ví dụ: i love you =>> uoy evol i
*/
function reverseString(myStr) {
  if (myStr.length == 0) {
    return null;
  }
  const result = myStr.split("").reverse().join("");
  console.log(result);
  //   todo: cách khác
  const result2 = myStr
    .split()
    .map((item) => item.split("").reverse().join(""))
    .reverse()
    .join(" ");
  console.log(result2);
}
reverseString("i love you");
