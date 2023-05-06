// TERNARY OPARATOR: TƯƠNG TỰ NHƯ TOÁN TỬ 3 NGÔI
const yourAge = 9;
let message = "";
/*
 cấu trúc:
    condition ? true : false
*/
yourAge >= 18
  ? (message = "Bạn là người lớn!")
  : yourAge < 10
  ? (message = "bạn là trẻ con!")
  : (message = "bạn là thanh niên");
console.log(message);
