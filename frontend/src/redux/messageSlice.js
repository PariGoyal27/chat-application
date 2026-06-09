import { createSlice } from "@reduxjs/toolkit";
import { create } from "axios";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [],
  },
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});
export const { setMessages } = messageSlice.actions;
export default messageSlice.reducer;
