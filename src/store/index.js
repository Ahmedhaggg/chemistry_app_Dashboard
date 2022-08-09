import { configureStore } from "@reduxjs/toolkit"
import { courseSelice } from "./courseSlice";
import { gradeSlice } from "./gradeSlice";
import { unitSlice } from "./unitSlice";
import { lessonSlice } from "./lessonSlice";
import { unitRevisionSlice } from "./unitRevisionSlice";
import { courseRevisionSlice } from "./courseRevisionSlice"
import authReducer from "./authSlice"

const Store = configureStore({

    reducer: {
        auth: authReducer,
        [courseSelice.reducerPath]: courseSelice.reducer,
        [gradeSlice.reducerPath]: gradeSlice.reducer,
        [unitSlice.reducerPath]: unitSlice.reducer,
        [lessonSlice.reducerPath]: lessonSlice.reducer,
        [unitRevisionSlice.reducerPath]: unitRevisionSlice.reducer,
        [courseRevisionSlice.reducerPath]: courseRevisionSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            courseSelice.middleware,
            gradeSlice.middleware,
            unitSlice.middleware,
            lessonSlice.middleware,
            unitRevisionSlice.middleware,
            courseRevisionSlice.middleware
        ]),
})

export default Store;