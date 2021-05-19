const { binarySearch, binarySearchRecursively } = require('./main.js');
const { equal, isActualyNaN } = require('../../utils');

const data = [1, 2, 3, 4, 5, 6, 7, 8];

equal(binarySearch(data, 5), 4);
equal(binarySearchRecursively(data, 5), 4);

equal(binarySearch(data, 2), 1);
equal(binarySearchRecursively(data, 2), 1);

equal(binarySearch(data, 7), 6);
equal(binarySearchRecursively(data, 7), 6);

equal(binarySearch(data, 8), 7);
equal(binarySearchRecursively(data, 8), 7);

equal(binarySearch(data, 1), 0);
equal(binarySearchRecursively(data, 1), 0);

isActualyNaN(binarySearch(data, 33))
isActualyNaN(binarySearchRecursively(data, 33))

isActualyNaN(binarySearch(data, 0))
isActualyNaN(binarySearchRecursively(data, 0))
