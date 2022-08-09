import { configureStore } from "@reduxjs/toolkit";
import { userLoginSlice } from "./slice/loginUser";
import { tokenUserSlice } from "./slice/tokenUser";

export const store = configureStore({
  reducer: {
    token: tokenUserSlice.reducer,
    [userLoginSlice.reducerPath]: userLoginSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userLoginSlice.middleware)
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>