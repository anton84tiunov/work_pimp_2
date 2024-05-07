import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInterfase } from '../../types/UserInterfase';

interface ProfileState {
  profiles: UserInterfase[];
  newProfile: UserInterfase;
  editProfile: UserInterfase;
  editProfileId: number;
  isLoading: boolean;
}

const initialState: ProfileState = {
  profiles: [],
  newProfile: { user_id: 0, name: '', surname: '', email: '', password: '', completed: false },
  editProfile: { user_id: 0, name: '', surname: '', email: '', password: '', completed: false },
  editProfileId: 0,
  isLoading: false,
};

const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    setProfiles: (state, action: PayloadAction<UserInterfase[]>) => {
      state.profiles = action.payload;
      state.isLoading = false;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    addProfile: (state, action: PayloadAction<Omit<UserInterfase, 'id'>>) => {
      const newProfile = action.payload;
      // const id = Date.now();
      const profileWithId = { ...newProfile };
      state.profiles.push(profileWithId);
      state.newProfile = { user_id: 0, name: '', surname: '', email: '', password: '', completed: false };
    },
    removeProfile: (state, action: PayloadAction<number>) => {
      const user_id = action.payload;
      state.profiles = state.profiles.filter(profile => profile.user_id !== user_id);
    },
    updateProfile: (state, action: PayloadAction<UserInterfase>) => {
      const updatedProfile = action.payload;
      state.profiles = state.profiles.map(profile => {
        if (profile.user_id === updatedProfile.user_id) {
          return updatedProfile;
        }
        return profile;
      });
      state.editProfile = { user_id: 0, name: '', surname: '', email: '', password: '', completed: false };
      state.editProfileId = 0;
    },
    selectProfileForEdit: (state, action: PayloadAction<number>) => {
      const user_id = action.payload;
      const selectedProfile = state.profiles.find(profile => profile.user_id === user_id);
      if (selectedProfile) {
        state.editProfile = selectedProfile;
        state.editProfileId = user_id;
      }
    },
  },
});

export const { setProfiles, setIsLoading, addProfile, removeProfile, updateProfile, selectProfileForEdit } = profilesSlice.actions;
export default profilesSlice.reducer;