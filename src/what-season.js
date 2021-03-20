const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  if (!isNaN(date) && date instanceof Date) {
    let month = date.getMonth();
    if (month < 2 || month === 11)
    return 'winter';
    if (month <= 4)
    return 'spring';
    if (month <= 7)
    return 'summer';
    if (month <= 10)
    return 'autumn'

  }
  else if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  else throw new Error();
 
};
