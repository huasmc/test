const unflattenBoard = (array: (number | string)[], spaces: number) => {
  const unflattened = [];
  while (array.length) unflattened.push(array.splice(0, spaces));
  return unflattened;
};

export default unflattenBoard;
