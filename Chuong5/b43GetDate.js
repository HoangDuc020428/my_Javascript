// TÌM HIỂU VỀ PHƯƠNG THỨC GET(lấy ra giá trị) TRONG OBJECT DATE
const now = new Date();
// in ra năm
console.log(now.getFullYear());
// in ra tháng: (0(tháng 1)-> 11(tháng 12))
console.log(now.getMonth());
// in ra ngày (1->31)
console.log(now.getDate());
// in ra thứ (0(Chủ nhật) -> 6 (thứ bảy))
console.log(now.getDay());
// in ra giờ
console.log(now.getHours());
// in ra phút
console.log(now.getMinutes());
// in ra mili giây
console.log(now.getMilliseconds());
// in ra giây
console.log(now.getSeconds());
// in ra timeStamp
console.log(now.getTime());
