const numberConverter = (n) => {
  // const toNum = Number(n);
  // const moneyDots = toNum.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  return Number(n);
};

export { numberConverter };
