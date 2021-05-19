function quickSort(array) {
  if (array.length === 0) {
    return [];
  }

  const initArray = [...array];
  const value = initArray.pop();
  const fPart = [];
  const sPart = [];

  for (let i = 0; i < initArray.length; i += 1) {
    if (value > initArray[i]) {
      fPart.push(initArray[i]);
    }

    if (value <= initArray[i]) {
      sPart.push(initArray[i]);
    }
  }

  return quickSort(fPart).concat([value].concat(quickSort(sPart)));
}

module.exports = {
  quickSort
}
