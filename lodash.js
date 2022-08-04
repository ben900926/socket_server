const _ = require('lodash');

let data = [1,[2,[3,[4]]]];

let another_data = _.flattenDeep(data);
console.log(another_data);