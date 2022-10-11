const post = async (
  url: string,
  board: (number | string)[],
  player_token: string
) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ board: board, player_token: player_token }),
  });
  return response.json();
};

export default post;
