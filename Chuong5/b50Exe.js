/*
     Bài 1:Viết chương trình nhập vào năm sinh tính ra số tuổi

*/
function getAge(yearOfBirth) {
  if (typeof yearOfBirth !== "number") return undefined;
  const now = new Date();
  const nowYear = now.getFullYear(); //lấy ra năm hiện tại
  const age = nowYear - yearOfBirth;
  return age;
}
const age = getAge(2002);
console.log(`Số tuổi hiện tại của bạn là: ${age}`);
