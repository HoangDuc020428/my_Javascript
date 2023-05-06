// ! Bài 10 11: Các phương thức khác trong String
const newStr = "     Frontend Developer   ";
// todo: split(tách ra): tách chuỗi ra thành mảng
// tách ra 2 từ( dựa vào khoảng trắng)
console.log(newStr.split(" "));
// tách ra từng chữ
console.log(newStr.split(""));
console.log(newStr.split("/"));

// todo: đổi tất cả về chữ thường
console.log(newStr.toLowerCase());

// todo: đổi tất cả về chữ hoa
console.log(newStr.toUpperCase());

// todo: kiểm tra xem chuỗi có bắt đầu (kết thúc) bằng 1 ký tự nào đó hay không (trả về true hoặc false)
console.log(newStr.startsWith("Frontend")); //true
console.log(newStr.endsWith("developer")); //false(phân biệt chữ in hoa và in thường)

// todo: kiểm tra xem chuỗi có chứa chuỗi hay không (trả về true hoặc false)
console.log(newStr.includes("end")); //true

// todo: tìm index của ký tự trong chuỗi
console.log(newStr.indexOf("D")); //lấy index ký tự đầu tiên
console.log(newStr.lastIndexOf("e")); //lấy index ký tự cuối cùng

// todo: thay thế
console.log(newStr.replace("Frontend", "Duc"));

// todo: lặp lại
console.log(newStr.repeat(5));

// todo: cắt
console.log(newStr.slice(0, 5)); //lấy từ index 0 đến index 4 (Front)
console.log(newStr.slice(-3, -1)); //index -1 là chữ cuối cùng lấy từ -2 -> -1(er)

// todo: để xóa khoảng trắng đầu và cuối
console.log(newStr.trim());
console.log(newStr.trimStart()); //xóa khoảng trắng đầu
console.log(newStr.trimEnd()); //xóa khoảng trắng cuối

// todo: lấy ra ký tự theo index
console.log(newStr.charAt(10)); //e

// ! Phân biệt substr và substring
/*
    substr: lấy ra một phần của chuỗi(string)
        substr(index, length) ->> index: vị trí bắt đầu, length: số ký tự muốn lấy
    substring: lấy ra các ký tự của chuỗi
        substring(start index, end index);
*/
const myStr = "Frontend";
console.log(myStr.substr(1, 5)); // ronte
console.log(myStr.substring(1, 5)); // ront

const myStr3 = "    Fronend developer    ";
// Loại bỏ khoảng trống ở 2 bên, đưa tất cả về in hoa thay chữ `developer` thành chữ `developer and designer` sau đó repeat 2 lần
console.log(
  `Result myStr3: ${myStr3
    .trim()
    .replace("developer", "developer and designer")
    .toUpperCase()
    .repeat(2)}`
);
