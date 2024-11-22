const formatViewCount = (count) => {
  if (count < 1000) {
    return `${count}회`;
  } else if (count < 10000) {
    const thousands = (count / 1000).toFixed(0);
    return `${thousands}천회`;
  } else if (count < 100000000) {
    const tenThousands = (count / 10000).toFixed(0);
    return `${tenThousands}만회`;
  } else {
    const hundredMillions = (count / 100000000).toFixed(0);
    return `${hundredMillions}억회`;
  }
};

export default formatViewCount;
