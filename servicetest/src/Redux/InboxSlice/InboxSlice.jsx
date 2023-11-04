import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchInboxData = createAsyncThunk(
  "inbox/fetchInboxData",
  async () => {
    try {
      const response = await axios.get("http://localhost:3002/communications");
      return response.data;
    } catch (error) {
      throw error; // Rethrow the error so it can be handled in the rejected case
    }
  }
);

const InboxSlice = createSlice({
  name: "inbox",
  initialState: {
    communications: [],
    status: "idle",
    error: null,
  },
  reducers: {
    clearUnreadMessages: (state, action) => {
      // Update the user data with the new values
      let newCommunications = [...state.communications];
      let foundedItemIndex = newCommunications.findIndex(
        (item) => item.id === action.payload
      );
      newCommunications[foundedItemIndex].unreadMessages = 0;

      state.communications = newCommunications;
    },
    sendNewMessage: (state, action) => {
      const { id, value } = action.payload;
      console.log(id);
      console.log(value);
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
      let newMessage = {
        time: timeString,
        text: value,
        type: "sent",
      };
      let newCommunications = [...state.communications];
      let foundedItemIndex = newCommunications.findIndex(
        (item) => item.id == id
      );

      newCommunications[foundedItemIndex].messages.push(newMessage);

      state.communications = newCommunications;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInboxData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInboxData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.communications = action.payload;
      })
      .addCase(fetchInboxData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearUnreadMessages, sendNewMessage } = InboxSlice.actions;
export default InboxSlice.reducer;
