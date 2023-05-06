const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < myArr.length; i++) {
  //todo:           nếu giá trị bằng 5 thì dừng vòng lặp(break)
  //   if (myArr[i] === 5) {
  //     break;
  //   }
  //   console.log(`value ${myArr[i]}`);
  //todo:            nếu giá trị bằng 5 thì tiếp tục(continue) vòng lặp(có nghĩa là bỏ qua giá trị bằng 5)
  if (myArr[i] === 5) {
    continue;
  }
  console.log(`value ${myArr[i]}`);
}
