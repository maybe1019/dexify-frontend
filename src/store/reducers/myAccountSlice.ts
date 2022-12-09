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
  twitterName: '',
  twitterScreenName: '',
  twitterImage: '/images/default-user.png',
};

const initialState: AccountState = {
  value: initialUser,
  status: ThunkStatus.IDLE,
};

export const getMyAccount = createAsyncThunk(
  'user/get',
  async (address: string, { rejectWithValue }) => {
    try {
      const result = await serverAPIs.user.getUser(address);
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

export const logoutTwitterUser = createAsyncThunk(
  'twitter/get',
  async (library: ethers.providers.JsonRpcProvider, { rejectWithValue }) => {
    try {
      const { signature, address } = await utils.ethers.signMessage(library);
      const result = await serverAPIs.twitter.logoutUser(address, signature);
      utils.notification.success(
        'Success',
        'Your twitter account have been disconnected.',
      );
      return result;
    } catch (error) {
      utils.notification.danger('ERROR', (error as any).message);
      return rejectWithValue('');
    }
  },
);

export const updateMyAccountWithTwitter = createAsyncThunk(
  'twitter/post',
  async (
    postInfo: {
      library: ethers.providers.JsonRpcProvider;
      oauth_verifier: string;
      account: string;
    },
    { rejectWithValue },
  ) => {
    try {
      const { signature, address } = await utils.ethers.signMessage(
        postInfo.library,
        postInfo.account,
      );
      const result = await serverAPIs.twitter.saveTwitterUserInfo(
        address,
        signature,
        postInfo.oauth_verifier,
      );
      if (!result) return rejectWithValue('');
      return result;
    } catch (error) {
      utils.notification.danger('ERROR', (error as any).message);
      console.error('updateMyAccountWithTwitter: ', error);
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
    builder.addCase(
      getMyAccount.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.value = action.payload;
        return state;
      },
    );
    builder.addCase(getMyAccount.rejected, (state) => {
      state.value = initialUser;
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
    builder.addCase(createOrUpdateMyAccount.rejected, (state) => {
      state.status = ThunkStatus.READY;
      return state;
    });
    builder.addCase(updateMyAccountWithTwitter.pending, (state) => {
      state.status = ThunkStatus.PENDING;
    });
    builder.addCase(updateMyAccountWithTwitter.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = ThunkStatus.READY;
      return state;
    });
    builder.addCase(updateMyAccountWithTwitter.rejected, (state) => {
      state.status = ThunkStatus.READY;
      return state;
    });
    builder.addCase(logoutTwitterUser.pending, (state) => {
      state.status = ThunkStatus.PENDING;
    });
    builder.addCase(logoutTwitterUser.rejected, (state) => {
      state.status = ThunkStatus.READY;
      return state;
    });
    builder.addCase(logoutTwitterUser.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = ThunkStatus.READY;
      return state;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setMyAccountAsDefault } = myAccountSlice.actions;

export default myAccountSlice.reducer;
