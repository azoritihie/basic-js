const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let numTurns = Math.pow(2, disksNumber) - 1;
  let seconds = Math.floor(numTurns/(turnsSpeed/3600));
  return {turns: numTurns, seconds: seconds}
};
