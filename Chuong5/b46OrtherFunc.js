// tìm hiểu về 1 số hàm trong dateString
const now = new Date();
console.log(now.toDateString()); //Sun Apr 02 2023
console.log(now.toTimeString()); //16:58:48 GMT+0700 (Giờ Đông Dương)
console.log(now.toLocaleDateString()); //2/4/2023
console.log(now.toLocaleTimeString()); //17:00:10
console.log(now.toLocaleDateString("vi-VI")); //2/4/2023
console.log(now.toISOString()); //2023-04-02T10:01:43.354Z(chưa cần hiểu)
