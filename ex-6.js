let height = undefined;
let result;
function myHeight(height){
    result = height ?? "Height is not defined";
}
myHeight(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
