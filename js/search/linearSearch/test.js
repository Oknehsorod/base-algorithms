const { linearSearch, linearSearchRecursively } = require('./main.js');
const { equal, isActualyNaN } = require('../../utils');

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const data1 = [11, 1, 3, 7, 6, 7, 10, 102, 33];

equal(linearSearch(data, 6), 5)
equal(linearSearchRecursively(data, 6), 5)

equal(linearSearch(data1, 102), 7)
equal(linearSearchRecursively(data1, 102), 7)

isActualyNaN(linearSearch(data1, 302))
isActualyNaN(linearSearchRecursively(data1, 302))
