/*
    Viết function kiểm tra xem hai object có bằng nhau hay không
*/
function compareObject(obj1, obj2) {
  // check keys length
  const objkey1 = Object.keys(obj1);
  const objkey2 = Object.keys(obj2);
  console.log(objkey1);
  console.log(objkey2);
  if (objkey1.length != objkey2.length) return false;
  //   check value, đồng thời check key
  const result = objkey1.every(function (key) {
    // console.log(obj2[key]);
    return obj1[key] === obj2[key];
  });
  return result;
}
console.log(compareObject({ a: 1 }, { a: 2 }));
