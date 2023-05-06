// UTC được sử dụng khi dùng múi giờ quốc tế
const now = new Date();
// in ra năm
console.log(now.getUTCFullYear());
// in ra tháng: (0(tháng 1)-> 11(tháng 12))
console.log(now.getUTCMonth());
// in ra ngày (1->31)
console.log(now.getUTCDate());
// in ra thứ (0(Chủ nhật) -> 6 (thứ bảy))
console.log(now.getUTCDay());
// in ra giờ
console.log(now.getUTCHours());
// in ra phút
console.log(now.getUTCMinutes());
// in ra mili giây
console.log(now.getUTCMilliseconds());
// in ra giây
console.log(now.getUTCSeconds());
