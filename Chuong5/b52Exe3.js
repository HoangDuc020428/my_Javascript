function timeSince(date) {
  const now = new Date();
  const yourDate = new Date(date);
  let seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000);
  //   console.log(seconds);
  let timer = seconds / 31536000;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} năm trước`);
    return;
  }
  timer = seconds / 2678400;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} tháng trước`);
    return;
  }
  timer = seconds / 604800;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} tuần trước`);
    return;
  }
  timer = seconds / 86400;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} ngày trước`);
    return;
  }
  timer = seconds / 3600;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} giờ trước`);
    return;
  }
  timer = seconds / 60;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} phút trước`);
    return;
  }
  if (seconds > 1) {
    console.log(`${seconds} giây trước`);
    return;
  }
  return;
}
const second = timeSince("Sun Apr 02 2023 22:00:00 GMT+0700 (Giờ Đông Dương)");

/*
    1 năm = 365 * 24 * 60 * 60 = 31536000 giây
    1 tháng = 31 * 24 * 60 * 60 = 2678400 giây
    1 tuần = 7 * 24 * 60 * 60 = 604800 giây
    1 ngày = 1 * 24 * 60 * 60 = 86400 giây
    1 giờ =  60 * 60 = 3600 giây
    1 phút = 60 giây
    
*/
