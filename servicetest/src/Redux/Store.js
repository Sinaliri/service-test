import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice/userSlice";
import workerReducer from "./WorkerSlice/WorkerSlice";
import inboxReducer from "./InboxSlice/InboxSlice";
import serviceSlice from "./ServiceSlice/ServiceSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    worker: workerReducer,
    inbox: inboxReducer,
    service: serviceSlice,
  },
});

export default store;
