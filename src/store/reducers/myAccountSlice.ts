import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: User = {
  title: "New User",
  image: "/images/default-user.png",
  id: "",
  name: "",
  bio: "",
  address: "",
  email: "",
} as User;

export const myAccountSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setMyAccountAsDevault: (state) => {
      state = initialState;
      return state
    },
    setMyAccount: (state, action: PayloadAction<User>) => {
      state = action.payload
      return state
    }
  },
});

// Action creators are generated for each case reducer function
export const { setMyAccountAsDevault, setMyAccount } = myAccountSlice.actions;

export default myAccountSlice.reducer;
