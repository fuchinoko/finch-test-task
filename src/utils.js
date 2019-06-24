export const randomSeveralNumbers = (amount, selected) =>  {
  const nums = new Set();
  while(nums.size !== selected) {
    nums.add(Math.floor(Math.random() * amount) + 1);
  }
  return [...nums];
}

export const isOverlapping  = (firstArr, secondArr, overlapNumber) =>  
  firstArr.filter(value => -1 !== secondArr.indexOf(value)).length >= overlapNumber;