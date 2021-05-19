function linearSearch(array, element) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === element) {
      return i;
    }
  }

  return NaN;
}

function linearSearchRecursively(array, element) {
  if (array.length === 0) {
    return NaN;
  }

  if (array[0] === element) {
    return 0 
  }

  return 1 + linearSearchRecursively(array.slice(1), element)
}

module.exports = {
  linearSearch,
  linearSearchRecursively
}
