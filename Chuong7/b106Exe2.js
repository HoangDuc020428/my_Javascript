/*
     Viết function nhập vào object và đầu ra là một array nested
     ví dụ: {a: 1, b: 2} => [["a": 1], ["b", 2]]
*/
// hàm kiểm tra đầu vào có phải object không
function isObject(value) {
  if (typeof value === "object" && !Array.isArray(value) && value != null) {
    return true;
  }
  return false;
}
function objectToArray(object) {
  if (!isObject(object)) return;
  //   todo: cách 1
  //   return Object.entries(object);

  //   todo Cách 2
  //   const result = Object.keys(object).map((key) => [key, object[key]]);
  //   return result;

  //   todo: Cách 3
  const result2 = [];
  for (let key in object) {
    //hasOwnProperty(key) => nếu object chứa key trả về true nếu không trả về false
    if (object.hasOwnProperty(key)) {
      result2.push([key, object[key]]);
    }
  }
  return result2;
}
console.log(objectToArray({ a: 1, b: 2 }));
