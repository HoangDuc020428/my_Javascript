/*
    1. Viết một functuin kiểm tra đầu vào có phải một object hay không
    dùng typeof value === "object"
    nhưng trong JS thì {}, [], null đều là object => cần thêm điều kiện để  kiểm tra array và null
*/
function isObject(value) {
  if (typeof value === "object" && !Array.isArray(value) && value != null) {
    return true;
  }
  return false;
}
console.log(isObject(null));
