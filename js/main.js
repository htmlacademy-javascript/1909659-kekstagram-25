function randomInteger(min, max) {
  if ((min>=0) && (max>min))
  { const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);}

  else {throw('Please provide only positive integers, the integers can not be the same (eg. 35 and 35), also the integer for upper range limit must be greater than the one for lower limit.');}
}
randomInteger(25,125);


function strLength(string){
  const length=string.length;
  if (length<=140)
  {throw('good');}
  else
  {throw('no good');}
}
strLength('dfdfd');
