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
    setThemeMode: (state, action) => {
      state.value = action.payload;
      return state;
    },
  },
});

export const { toggleThemeMode, setThemeMode } = themeModeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export default themeModeSlice.reducer;
