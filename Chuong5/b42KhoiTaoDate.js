/*
    4 cách khởi tạo Date object cần biết 
    new Date(): in ra ngày tháng năm hiện tại
    new Date(timeStamp): dựa vào timeStamp để in ra ngày tháng năm
    new Date(date String): 
    new Date(year, month, day, hours, minutes, seconds, miliseconds)
        !chú ý: month bắt đầu từ 0( có nghĩa là tháng 1 sẽ là 0 => muốn in ra tháng 4 thì điền 3)

*/
const now = new Date();
console.log(new Date());
console.log(now.getTime()); // 1680426657142(timestamp)
console.log(new Date(1680426657142));
console.log(new Date("Sun Apr 02 2023 16:10:57 GMT+0700 (Giờ Đông Dương)"));
console.log(new Date(2023, 03, 02, 16, 4, 20, 20));
