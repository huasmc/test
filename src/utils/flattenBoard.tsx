const flattenBoard = (board: (number | string)[][]) => {
  const flatBoard = board.flat().map((cell: number | string) => cell);
  return flatBoard;
};

export default flattenBoard;
