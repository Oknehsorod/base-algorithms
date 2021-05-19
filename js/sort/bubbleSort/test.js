const { bubbleSort } = require('./main');
const { arrayEqual } = require('../../utils');

const data = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
const data1 = [100, 35, 53, 11, 0, 3, 573, 10, 10, 32];

const correctData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const correctData1 = [0, 3, 10, 10, 11, 32, 35, 53, 100, 573];

arrayEqual(bubbleSort(data), correctData);

arrayEqual(bubbleSort(data1), correctData1);
