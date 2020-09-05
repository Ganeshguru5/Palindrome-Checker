function palindrome(str) {
  let pushedone=[];
  let splitedone=str.split("");
  for(let i=0;i<splitedone.length;i++){
    if(splitedone[i]!=="_"&&splitedone[i]!==' '&&splitedone[i]!==','&&splitedone[i]!=='.'&&splitedone[i]!=='-'&&splitedone[i]!=='/'&&splitedone[i]!=='('&&splitedone[i]!==')'){
      pushedone.push(splitedone[i])
    }
   
  } 
  let pushedtwo=[];
  let splitedtwo=str.split("");
  let reversed=splitedtwo.reverse()
  for(let j=0;j<reversed.length;j++){
    if(reversed[j]!=="_"&&reversed[j]!==' '&&reversed[j]!==','&&reversed[j]!=='.'&&reversed[j]!=='-'&&reversed[j]!=='/'&&reversed[j]!=='('&&reversed[j]!==')'){
      pushedtwo.push(reversed[j])
    }
   
    
  }
  let join1=pushedone.join("");
  join1=join1.toUpperCase()
  console.log(join1)
  let join2=pushedtwo.join("");
  join2=join2.toUpperCase()
   console.log(join2)
  if(join1===join2){
    return true
  }

return false

}



