/* Tìm hiểu về Timestamp và Epochtime
    timestamp được tính dựa vào Epochtime (Thu Jan 01 1970 08:00:00 GMT+0800 (Giờ Đông Dương)) đến hiện tại
    timestamp được tính theo miliseconds 

*/
const now = new Date();
console.log(now.getTime());
console.log(new Date(0)); //Thu Jan 01 1970 08:00:00 GMT+0800 (Giờ Đông Dương)
