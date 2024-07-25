import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TabsState {
  currentTab: 'profile' | 'link';
}

const initialState: TabsState = {
  currentTab: 'profile',
};

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setTab(state, action: PayloadAction<'profile' | 'link'>) {
      state.currentTab = action.payload;
    },
  },
});

export const { setTab } = tabsSlice.actions;
export default tabsSlice.reducer;
