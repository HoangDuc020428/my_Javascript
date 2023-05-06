/* TÌM HIỂU VỀ CÁC PHƯƠNG THỨC SET(đặt) TRONG OBJECT DATE
    tương tự như phương thức get:
    !chú ý: không có phương thức set thứ trong tuần
*/
const birthday = new Date(2002, 04, 28);
console.log(birthday);
// set năm
birthday.setFullYear(2003);
// set tháng
birthday.setMonth(5);
// set ngày
birthday.setDate(20);
// set giờ
birthday.setHours(23);
// set phút
birthday.setMinutes(23);
// set giây
birthday.setSeconds(23);
console.log(`Birthday after update: ${birthday}`);
