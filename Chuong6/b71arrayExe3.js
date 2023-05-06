/**
    3. In hoa chữ cái đầu trong chuỗi: 
    ví dụ: my name is duc  => My Name Is Duc
 */
function capitalWord(myStr) {
  if (myStr.length == 0) {
    return null;
  }
  const result = myStr
    .split(" ")
    .map((item) =>
      item.toLowerCase().replace(item.charAt(0), item.charAt(0).toUpperCase())
    )
    .join(" ");
  console.log(result);
}
capitalWord("my naMe iS duc");

// todo: cách 2 dùng hàm có sẵn
function capitalizeWord(word) {
  if (word.length == 0) {
    return null;
  }
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  let ortherWord = word.toLowerCase().slice(1);

  return `${newWord}${ortherWord}`;
}
// console.log(capitalizeWord("DUc"));
function capitalizeStr(myStr) {
  const result = myStr
    .split(" ")
    .map((item) => capitalizeWord(item))
    .join(" ");
  console.log(result);
}
capitalizeStr("my nAme iS Duc");
