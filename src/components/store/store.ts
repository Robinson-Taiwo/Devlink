import { configureStore } from '@reduxjs/toolkit';
import tabsReducer from '@/components/store/tabsSlice';
import formsReducer from "@/components/store/formsSlice"

const store = configureStore({
  reducer: {
    tabs: tabsReducer,
    forms: formsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
