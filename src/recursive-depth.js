const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let max = 1;
    for (let a of arr) {
      if (Array.isArray(a)){
        let n = 1;
        n += this.calculateDepth(a);
        if (n > max) {
          max = n;
          n = 1;
        }
      }
    }
    return max;
  }
};