import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import post from "../service/fetch";
import URLS from "../service/urls";

type fetchProps = {
  board: (string | number)[];
  playerToken: string;
};

export const fetchBotSpot = createAsyncThunk(
  "fetch/botSpot",
  async ({ board, playerToken }: fetchProps, thunkAPI) => {
    const response = await post(URLS.AI_BOT, board, playerToken);
    return response;
  }
);

const boardSlice = createSlice({
  name: "users",
  initialState: { ready: true, spot: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBotSpot.fulfilled, (state, { payload }) => {
      state.spot = payload;
      state.ready = true;
    });
    builder.addCase(fetchBotSpot.rejected, (state, action) => {
      state.ready = false;
    });
    builder.addCase(fetchBotSpot.pending, (state, action) => {
      state.ready = false;
    });
  },
});

export default boardSlice.reducer;
