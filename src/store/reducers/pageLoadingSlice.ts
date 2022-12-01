import { createSlice } from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState: { value: boolean } = {
  value: false,
};

export const pageLoadingSlice = createSlice({
  name: 'pageLoading',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    togglePageLoading: (state) => {
      state.value = !state.value;
    },
    setPageLoading: (state, action) => {
      state.value = action.payload;
      return state;
    },
  },
});

export const { togglePageLoading, setPageLoading } = pageLoadingSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export default pageLoadingSlice.reducer;
