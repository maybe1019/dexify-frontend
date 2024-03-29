import { createSlice } from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState: { value: string } = {
  value: 'dark',
};

export const themeModeSlice = createSlice({
  name: 'themeMode',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.value = state.value === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggleThemeMode } = themeModeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export default themeModeSlice.reducer;
