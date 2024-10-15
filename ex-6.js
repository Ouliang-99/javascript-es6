let height = undefined;
let result = nullishHeight(height);

function nullishHeight(height) {
  return (height = undefined ?? `Height is not defined`);
}

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
