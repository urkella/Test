//Написати функцију racun(cena,dan,penzioner)

//cena - Број већи од 0 - Проверити исправност (Функција враћа -1 ако је неисправно)
//dan - Број између 1 и 7 (означава дане у недељи) - Без провере
//penzioner - true / false (означава да ли је купац пензионер) - Без провере
//Ако је купац пензионер и недеља је: попуст од 25%
//Ако је купац пензионер и није недеља: попуст од 10%
//Ако купац није пензионер и среда је: попуст од 10%
//Ако купац није пензионер и није среда: нема попуста
function racun(cena,dan,penzioner) {
  if(typeof num1 !== 'number'){
    return -1;
  } 
  if(penzioner){
    if(dan== 7){
      return cena * 3/4;
    }
    else{
      return cena * 9/10
    }
  }
  else {
    if (dan ==3) {
      return cena * 9/10;
    }
    else{
      return cena
    }
  }
  
  


}
