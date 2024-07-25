// redux/platformSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlatformState {
    name: string;
    icon: string;
    color: string;
}

interface PlatformArrayState {
    platforms: PlatformState[];
}

const initialState: PlatformArrayState = {
    platforms: [],
};

const platformSlice = createSlice({
    name: 'platforms',
    initialState,
    reducers: {
        addOrUpdatePlatform(state, action: PayloadAction<PlatformState>) {
            const existingIndex = state.platforms.findIndex(
                platform => platform.name === action.payload.name
            );
            if (existingIndex >= 0) {
                state.platforms[existingIndex] = action.payload;
            } else {
                state.platforms.push(action.payload);
            }
        },
        removePlatform(state, action: PayloadAction<string>) {
            state.platforms = state.platforms.filter(
                platform => platform.name !== action.payload
            );
        },
    },
});

export const { addOrUpdatePlatform, removePlatform } = platformSlice.actions;
export default platformSlice.reducer;
