import { Profile, ProfileRole } from 'src/entities/profile/model/types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState, StoreThunk } from 'src/features/store/model';
import { ProfileAuthOutput } from 'src/features/manageProfile/model/profileService';
import { AuthPair } from 'src/shared/model/types';
import { coreService } from 'src/features/coreService/model';

type ProfileStoreType = {
  value: Profile;
  authPair: AuthPair;
  error: string;
  status: string;
};

const initialState = {} as ProfileStoreType;

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Profile>) => {
      state.value = action.payload;
    },
    clearProfile: (state) => {
      state.value = {} as Profile;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = '';
    },
    requestRegistration: (state, action: PayloadAction<AuthPair>) => {
      state.authPair = action.payload;
    },
    requestLogin: (state, action: PayloadAction<AuthPair>) => {
      state.authPair = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authorize.fulfilled, (state, action) => {
        state.value = action.payload.profile;
      })
      .addCase(authorize.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const profile = profileSlice.reducer;
export const { setProfile, clearProfile, setError, clearError, requestRegistration, requestLogin } =
  profileSlice.actions;
export const selectProfile = (state: StoreState): Profile => state.profile.value;
export const selectIsAdminProfileRole = (state: StoreState): boolean => state.profile.value?.role === ProfileRole.ADMIN;
export const selectProfileError = (state: StoreState): string => state.profile.error;
export const selectAuthPair = (state: StoreState): AuthPair => state.profile.authPair;

type AuthorizeThunkType = {
  email: string;
  password: string;
  isRegistration: boolean;
};

export const authorize = createAsyncThunk(
  'profile/authorize',
  async ({ email, password, isRegistration }: AuthorizeThunkType, thunkApi) => {
    thunkApi.dispatch(clearError());
    const response: ProfileAuthOutput = isRegistration
      ? await coreService.addProfile(email, password)
      : await coreService.checkProfile(email, password);
    return response;
  }
);

export const loadProfile = (): StoreThunk => (dispatch) => {
  dispatch(clearError());
  coreService
    .getProfile()
    .then((profile) => {
      dispatch(setProfile(profile));
    })
    .catch((reason) => {
      console.error(reason);
      dispatch(setError(reason.message));
    });
};
