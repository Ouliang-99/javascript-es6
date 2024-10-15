let height = undefined;
let result;
function nullCheck(height) {
  return (result = height ?? "Height is not defined");
}
nullCheck(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
