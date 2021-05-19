function bubbleSort(array) {
  const result = [...array];
  for (let i = 0; i < result.length; i += 1) {
  	for (let j = 0; j < result.length; j += 1) {  
      const fValue = result[j];
      const sValue = result[j + 1];
      if (fValue > sValue) {
        result[j] = sValue;
        result[j + 1] = fValue;
      } 
    }
  }
  return result;
}

module.exports = {
  bubbleSort
}
