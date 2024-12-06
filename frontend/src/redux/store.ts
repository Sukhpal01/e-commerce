import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "./api";
import { myreducer } from "./reducer";

export const store = configureStore({
     reducer: {
          [myApi.reducerPath]: myApi.reducer,
          [myreducer.reducerPath]: myreducer.reducer
     },
     middleware: (mid: any) => mid().concat(myApi.middleware)
})