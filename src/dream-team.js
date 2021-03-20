const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(team) {
  //throw new CustomError('Not implemented');
  if (!Array.isArray(team)){
    return false
  }
    let count = 0;
    let result = '';
      for (let i = 0; i < team.length; i ++) {
      //for (let j = 0; j <team[i].length; j++){
        if (typeof team[i] === 'string'){
          count =+ 1;
        }}
    
        if (count === 0){
          return false;}
        else {
    for (let i = 0; i < team.length; i ++) {
         if (typeof team[i] === 'string'){
          team[i] = team[i].trim().toUpperCase();
          if (team[i][0].toUpperCase() === team[i][0]) {
              result = result + team[i][0];
      }
    }
    }
    return result.split('').sort().join('');    
    }
  }
