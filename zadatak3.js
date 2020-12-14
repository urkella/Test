// zadatak3.js
//Написати програм који рачуна просечну вредност бројева између N и M (укључујући оба):

//Просечна вредност свих бројева
//Просечна вредност бројева који садрже цифру 2

//Уместо ставке 2 - Просечна вредност бројева дељивих са 3 - 75% поена
let N = 5
let M = 3

function prosek(N,M){
  max= Math.max(N, M);
  min= Math.min(N, M);
  sum = 0;
  sum = 0;
  for(min;min<=max;min++){
    sum+=min;
    num++;

  }
  return sum/num
}
function prosek3(N,M){
  max= Math.max(N,M);
  min= Math.max(N,M);
  sum = 0;
  num = 0;
  for(min;min<=max;min++){
    if(min% 3 ===0){
      sum+=min;
      num++;
    }
  }
  return sum/num
}

console.log('Prosek svih brojeva je ' + prosek(N,M));
console.log('Prosek brojeva deljivih sa 3 je ' +prosek3(N,M));












