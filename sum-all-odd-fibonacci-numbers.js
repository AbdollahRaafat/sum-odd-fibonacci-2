module.exports = function (num) {
  let first =1;
  let second =1;

  let sum=1;
  while( first<=num && second<=num )
  {

    if(second %2  != 0)
      sum+=second;

    let temp=first;
    first=second;
    second+=temp; 
  }

return sum;

}