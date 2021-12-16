const numberConverter = (n) => {
  // return Number(n)
  //   .toString()
  //   .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
  return Number(n);
};

export { numberConverter };
