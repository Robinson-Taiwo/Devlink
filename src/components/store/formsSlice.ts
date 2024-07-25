import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Form {
  id: number;
  link: string;
  platform: string;
}

interface FormsState {
  forms: Form[];
}

const initialState: FormsState = {
  forms: [],
};

const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    addForm(state, action: PayloadAction<{ link: string; platform: string }>) {
      const newId = state.forms.length > 0 ? Math.max(...state.forms.map(form => form.id)) + 1 : 1;
      state.forms.push({ id: newId, link: action.payload.link, platform: action.payload.platform });
    },
    removeForm(state, action: PayloadAction<number>) {
      state.forms = state.forms.filter(form => form.id !== action.payload);
    },
  },
});

export const { addForm, removeForm } = formsSlice.actions;
export default formsSlice.reducer;
