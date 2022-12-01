import { ThunkStatus } from './../../helpers/enums';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import serverAPIs from '../../api';
import utils from '../../helpers/utils';
import { ethers } from 'ethers';
const initialUser: User = {
  title: 'New User',
  image: '/images/default-user.png',
  id: '',
  name: '',
  bio: '',
  address: '',
  email: '',
};

const initialState: AccountState = {
  value: initialUser,
  status: ThunkStatus.IDLE,
};

export const getMyAccount = createAsyncThunk(
  'user/get',
  async (library: ethers.providers.JsonRpcProvider, { rejectWithValue }) => {
    try {
      const { signature, address } = await utils.ethers.signMessage(library);
      const result = await serverAPIs.user.getUser(signature, address);
      return result;
    } catch (error) {
      utils.notification.danger('ERROR', (error as any).message);
      return rejectWithValue('');
    }
  },
);

export const createOrUpdateMyAccount = createAsyncThunk(
  'user/post',
  async (
    postInfo: {
      library: ethers.providers.JsonRpcProvider;
      file: File;
      newAccount: User;
    },
    { rejectWithValue },
  ) => {
    try {
      const { signature, address } = await utils.ethers.signMessage(
        postInfo.library,
      );
      const result = await serverAPIs.user.postUser(
        signature,
        address,
        postInfo.file,
        postInfo.newAccount,
      );
      utils.notification.success(
        'Success',
        'Your account details have been saved.',
      );
      return result;
    } catch (error) {
      utils.notification.danger('ERROR', (error as any).message);
      return rejectWithValue('');
    }
  },
);

export const myAccountSlice = createSlice({
  name: 'myAccount',
  initialState,
  reducers: {
    setMyAccountAsDefault: (state) => {
      state.value = initialUser;
      return state;
    },
  },
  extraReducers(builder) {
    builder.addCase(getMyAccount.pending, (state) => {
      state.status = ThunkStatus.PENDING;
    });
    builder.addCase(
      getMyAccount.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.value = action.payload;
        state.status = ThunkStatus.READY;
        return state;
      },
    );
    builder.addCase(getMyAccount.rejected, (state) => {
      state.value = initialUser;
      state.status = ThunkStatus.READY;
      return state;
    });

    builder.addCase(createOrUpdateMyAccount.pending, (state) => {
      state.status = ThunkStatus.PENDING;
    });
    builder.addCase(createOrUpdateMyAccount.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = ThunkStatus.READY;
      return state;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setMyAccountAsDefault } = myAccountSlice.actions;

export default myAccountSlice.reducer;
