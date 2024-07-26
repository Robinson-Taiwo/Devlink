import { configureStore } from '@reduxjs/toolkit';
import tabsReducer from '@/components/store/tabsSlice';
import formsReducer from "@/components/store/formsSlice";
import platformReducer from "@/components/store/platformSlice";
import profileReducer from "@/components/store/profileSlice"; // Adjust the path based on your file structure

const store = configureStore({
  reducer: {
    tabs: tabsReducer,
    forms: formsReducer,
    platform: platformReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
