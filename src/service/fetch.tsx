const post = async (
  url: string,
  board: (number | string)[],
  player_token: string
) => {
  let formData = new FormData();
  formData.append("board", JSON.stringify(board));
  formData.append("player_token", player_token);
  const response = await fetch(url, {
    body: formData,
    method: "post",
  });
  return response.json();
};

export default post;
