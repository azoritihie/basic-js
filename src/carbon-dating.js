const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const koef = 0.693/HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  numSampleAct = parseFloat(sampleActivity);
if (typeof sampleActivity !== 'string' || isNaN(numSampleAct) || sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0)
return false;
return Math.ceil(Math.log(MODERN_ACTIVITY/numSampleAct)/koef);
};
