const ftoc = function(f) {
  let celcius = (f - 32) * .5556
  return Math.round(celcius * 10) / 10
};

const ctof = function(c) {
  let farah = (c * 1.8) + 32
  return Math.round(farah * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
