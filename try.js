//map
let map = new Map();
map.set('a', { count: 2 });
map.set('b', { count: 1 });
let iterater = map.values();

console.log(iterater.next().value.count);
console.log(iterater.next().value.count);