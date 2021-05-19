function binarySearch(array, element) {
  let start = 0;
  let end = array.length - 1;
  let middle;

  if (element < array[0] || element > array[end]) {
    return NaN;
  }

  while (start !== end) {
    middle = Math.floor((start + end) / 2)
    const value = array[middle];

    if (element === value) {
      return middle;
    }

    if (element === array[middle + 1]) {
      return middle + 1;
    }

    if (element > value) {
      start = middle
    }

    if (element < value) {
      end = middle
    }
  }

  return NaN;
}

function binarySearchRecursively(array, element) {
  const middle = Math.floor(array.length / 2);
  const value = array[middle];
  const firstPart = array.slice(0, middle);
  const secondPart = array.slice(middle);

  if (value === element) {
    return middle;
  }

  if (middle === 0) {
    return NaN;
  }

  if (element > value) {
    return firstPart.length + binarySearchRecursively(secondPart, element);
  }

  if (element < value) {
    return binarySearchRecursively(firstPart, element);
  }
}

module.exports = {
  binarySearch,
  binarySearchRecursively
}
