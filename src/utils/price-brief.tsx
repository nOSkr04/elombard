const priceBrief = (price: number) => {
  if (!price) {
    return null;
  }
  const convert = `${price.toLocaleString()} ₮`;
  return convert;
};

export { priceBrief };
