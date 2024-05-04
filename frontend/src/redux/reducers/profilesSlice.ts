import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileInterfase } from '../../types/Profile';

interface ProfileState {
  profiles: ProfileInterfase[];
  newProfile: ProfileInterfase;
  editProfile: ProfileInterfase;
  editProfileId: string;
  isLoading: boolean;
}

const initialState: ProfileState = {
  profiles: [],
  newProfile: { id: '', name: '', surname: '', email: '', password: '', completed: false },
  editProfile: { id: '', name: '', surname: '', email: '', password: '', completed: false },
  editProfileId: '',
  isLoading: false,
};

const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    setProfiles: (state, action: PayloadAction<ProfileInterfase[]>) => {
      state.profiles = action.payload;
      state.isLoading = false;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    addProfile: (state, action: PayloadAction<ProfileInterfase>) => {
      const newProfile = action.payload;
      const id = Date.now().toString();
      const profileWithId = { ...newProfile, id };
      state.profiles.push(profileWithId);
      state.newProfile = { id: '', name: '', surname: '', email: '', password: '', completed: false };
    },
    removeProfile: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.profiles = state.profiles.filter(profile => profile.id !== id);
    },
    updateProfile: (state, action: PayloadAction<ProfileInterfase>) => {
      const updatedProfile = action.payload;
      state.profiles = state.profiles.map(profile => {
        if (profile.id === updatedProfile.id) {
          return updatedProfile;
        }
        return profile;
      });
      state.editProfile = { id: '', name: '', surname: '', email: '', password: '', completed: false };
      state.editProfileId = '';
    },
    selectProfileForEdit: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const selectedProfile = state.profiles.find(profile => profile.id === id);
      if (selectedProfile) {
        state.editProfile = selectedProfile;
        state.editProfileId = id;
      }
    },
  },
});

export const { setProfiles, setIsLoading, addProfile, removeProfile, updateProfile, selectProfileForEdit } = profilesSlice.actions;
export default profilesSlice.reducer;


