const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  if (!Array.isArray(array)){
  throw new Error();
  }
  let result = [];
  //let control_Seq = ['--discard-next','--discard-prev', '--double-next','--double-prev'];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '--discard-next'){
      if (i != array.length - 1){
        i++;
      }
     if (array[i+1] === '--discard-prev' || array[i+1] === '--double-prev'){
       i++;
     }
   }
 else if (array[i] === '--discard-prev') {
   if (i) {
     result.pop();
   }
 }
    else if (array[i] === '--double-next'){
      if (i != array.length - 1){
      result.push(array[i+1]);}
    }
    else if (array[i] === '--double-prev'){
      if (i){
        result.push(array[i-1]);
      }
    } else result.push(array[i]);
  }
 return result;
 };
  
// module.exports = function transform(arr) {
//   if (!Array.isArray(arr)) {
//       throw new Error();
//   }
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//       switch (arr[i]) {
//           case '--discard-next':
//               if (i != arr.length - 1) {
//                   i++;
//               } 
//               if (arr[i + 1] === '--discard-prev' || 
//                   arr[i + 1] === '--double-prev') {
//                   i++;
//               }
//               break;
//           case '--discard-prev':
//               if (i) {
//                   result.pop();
//               }
//               break;
//           case '--double-next':
//               if (i != arr.length - 1) {
//                   result.push(arr[i+1]);
//               }
//               break;
//           case '--double-prev':
//               if (i) {
//                   result.push(arr[i-1]);
//               }
//               break;
//           default:
//               result.push(arr[i]);
//               break;
//       }
//   }
//   return result;
// };
