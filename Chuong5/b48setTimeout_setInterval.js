/*
    TÌM HIỂU VỀ setTimeout VÀ  setInterval 
    setTimeout(function(){your code}, timeout): set 1 khoảng thời gian sau bao lâu sẽ làm 1 việc gì đó
        thường dùng như: khi người dùng vào trang web thì mình muốn sau 5 giây sẽ hiển thị lên thông báo
    setInterval(function(){your code}): sau 1 khoảng thời gian sẽ lặp lại hành động nào đó
        thường dùng trong trang web khi bạn muốn đếm ngược khoảng thời gian khuyến mãi... 
*/

const timer1 = setTimeout(function () {
  alert("notify for me after 3 seconds!");
}, 3000);
// clearTimeout(timer1);
const timer2 = setInterval(() => {
  console.log("call me");
}, 2000);
clearInterval(timer2); // tắt hành động
