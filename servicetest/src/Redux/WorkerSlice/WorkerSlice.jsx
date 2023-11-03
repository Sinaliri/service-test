import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchData = createAsyncThunk("worker/fetchData", async () => {
  try {
    const response = await axios.get("http://localhost:3002/workers");
    return response.data;
  } catch (error) {
    throw error; // Rethrow the error so it can be handled in the rejected case
  }
});
// update bookmarks
export const updateWorkerAndBookmarks = createAsyncThunk(
  "workers/updateWorkerAndBookmarks",
  async ({ workerArray, bookmarkedWorkerIds }, { dispatch }) => {
    // Update the workerArray based on bookmarkedWorkerIds
    workerArray.forEach((worker) => {
      if (bookmarkedWorkerIds.includes(worker.id)) {
        worker.bookmarked = true;
      }
    });

    // Dispatch an action to update the Redux store with the updated workerArray and bookmarks
    dispatch(
      workerSlice.actions.updateBookmarks({
        workerArray,
        bookmarks: bookmarkedWorkerIds,
      })
    );
  }
);
const workerSlice = createSlice({
  name: "worker",
  initialState: {
    workers: [],
    status: "",
    error: null,
    bookmarks: [],
  },
  reducers: {
    updatebookmarks: (state, action) => {
      // Update the user data with the new values
      let newWorker = [...state.workers];
      let newBookmarks = [...state.bookmarks];
      if (newBookmarks.find((item) => item === action.payload)) {
        newBookmarks = newBookmarks.filter((item) => item !== action.payload);
        console.log(newBookmarks.find((item) => item === action.payload));
      } else {
        console.log(newBookmarks.find((item) => item === action.payload));
        console.log("dfdsfds");
        newBookmarks.push(action.payload);
      }
      console.log(newBookmarks);
      newWorker.forEach((worker) => {
        if (newBookmarks.indexOf(worker.id) !== -1) {
          worker.bookmarked = true;
        } else {
          worker.bookmarked = false;
        }
      });
      state.workers = newWorker;
      state.bookmarks = newBookmarks;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = "succeeded";
        state.workers = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { updatebookmarks } = workerSlice.actions;
export default workerSlice.reducer;
