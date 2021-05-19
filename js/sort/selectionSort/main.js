function selectionSort(array) {
  let initArray = [...array];
  let result = [];

  for (let i = 0; i < array.length; i += 1) {
    let min = Infinity;
    let minIndex = -1;

    for (let j = 0; j < initArray.length; j += 1) {
      const value = initArray[j];
      if (value < min) {
        min = value;
        minIndex = j;
      }
    }

    initArray.splice(minIndex, 1);
    result.push(min)
  }

  return result;
}

function selectionSortRecursively(array) {
  if (array.length === 0) {
    return [];
  }

  let min = Infinity;
  let minIndex = -1;
  let initArray = [...array];

  for (let j = 0; j < initArray.length; j += 1) {
    const value = initArray[j];
    if (value < min) {
      min = value;
      minIndex = j;
    }
  }

  initArray.splice(minIndex, 1);

  return [min].concat(selectionSortRecursively(initArray))
}

module.exports = {
  selectionSort,
  selectionSortRecursively
}
