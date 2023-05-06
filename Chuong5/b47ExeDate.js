//  Hiện thị ngày tháng năm theo dạng: dd/mm/yyyy
const myTime = new Date();
const myYear = myTime.getFullYear();
const myMonth = myTime.getMonth() + 1;
const myDate = myTime.getDate();
const fixMonth = myMonth < 10 ? "0" : "";
const fixDate = myDate < 10 ? `0${myDate}` : myDate;
console.log(`${fixDate}/${fixMonth}${myMonth}/${myYear}`);
