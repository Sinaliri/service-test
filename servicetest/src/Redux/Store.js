import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice/userSlice";
import workerReducer from "./WorkerSlice/WorkerSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    worker: workerReducer,
  },
});

export default store;
