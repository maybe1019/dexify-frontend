import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index';

// Define the initial state using that type
const initialState: { value: FundData[]; loading: boolean } = {
  loading: true,
  value: [],
};

export const allFundsSlice = createSlice({
  name: 'allFunds',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAllFunds: (state, action) => {
      state.value = action.payload;
      state.loading = false;
      return state;
    },
  },
});

export const { setAllFunds } = allFundsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.themeMode.value;

export default allFundsSlice.reducer;
