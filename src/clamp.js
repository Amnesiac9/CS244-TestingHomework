function clamp(value, min = 0, max = 1) {
  if (value < min) {
    value = min;
  }

  if (value > max) {
    value = max;
  }

  return value;
}

module.exports = clamp;