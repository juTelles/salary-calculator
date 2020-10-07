
const percentOf = (value, percent) => {
  return value * percent;
};

const treatNum = (value) => {
  return parseFloat(value).toFixed(2);
}

export default { percentOf, treatNum  };