// Bài 2: viết chương trình đếm ngược thời gian theo từng giây dựa vào thời gian đầu vào. Ví dụ thời gian làm bài là 30 phút khi hết nếu chạy về 0 thì thông báo hết thời gian làm bài
function countdown(minutes = 1) {
  let seconds = minutes * 60;
  let counter = 0;
  //   ! chú ý: cần khai báo biến để lưu trữ hàm setInterval để có thể clearInterval(nếu không khai báo thì không thể clear)
  const timer = setInterval(function () {
    counter = counter + 1;
    console.log(counter);
    if (counter === seconds) {
      clearInterval(timer);
      console.log("Your time is end!");
    }
  }, 1000);
}
countdown(1);
