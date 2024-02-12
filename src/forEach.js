function forEach(array, cb) {
  for (let i = 0; i < array.length; ++i) {
    cb(array[i], i, array);
  }
}

module.exports = forEach;