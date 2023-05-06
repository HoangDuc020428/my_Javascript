/*
    Viết một function có tên without để xóa một key và value dựa vào key
    ví dụ: ({a: 1, b: 2}, 'b') => {a: 1}
*/
function without(object, ...key) {
  const cloneObject = { ...object };
  key.forEach((item) => {
    delete cloneObject[item];
  });
  return cloneObject;
}
console.log(without({ a: 1, b: 2 }, "a", "b"));
