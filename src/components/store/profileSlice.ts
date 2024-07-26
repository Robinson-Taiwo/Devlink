// profileSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
    firstName: string;
    lastName: string;
    email: string;
    selectedImage: string | null;
}

const initialState: ProfileState = {
    firstName: '',
    lastName: '',
    email: '',
    selectedImage: null,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setFirstName(state, action: PayloadAction<string>) {
            state.firstName = action.payload;
        },
        setLastName(state, action: PayloadAction<string>) {
            state.lastName = action.payload;
        },
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        setSelectedImage(state, action: PayloadAction<string | null>) {
            state.selectedImage = action.payload;
        },
    },
});

export const { setFirstName, setLastName, setEmail, setSelectedImage } = profileSlice.actions;
export default profileSlice.reducer;
