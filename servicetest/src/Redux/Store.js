import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice/userSlice";
import workerReducer from "./WorkerSlice/WorkerSlice";
import inboxReducer from "./InboxSlice/InboxSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    worker: workerReducer,
    inbox: inboxReducer,
  },
});

export default store;
