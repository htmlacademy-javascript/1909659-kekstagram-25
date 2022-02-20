function randomInteger(min, max) {
  if ((min>=0) && (max>min))
  { let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);}

  else {alert('Please provide only positive integers, the integers can not be the same (eg. 35 and 35), also the integer for upper range limit must be greater than the one for lower limit.')}
}
console.log(randomInteger(25,125));


function strLength(string){
let length=string.length;
if (length<=140)
{return console.log('good');}
else
{console.log('no good');}
}
strLength('dfdfd');
