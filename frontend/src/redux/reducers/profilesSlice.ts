import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileInterfase } from '../../types/Profile';


// Определение интерфейса для состояния слайса Profile
interface ProfileState {
    profiles: { [id: string]: ProfileInterfase }; 
    newProfile: ProfileInterfase; 
    editProfile: ProfileInterfase;
    editProfileId: string; // Идентификатор 
  }

  // Определение начального состояния для слайса Todo
  const initialState: ProfileState = {
    profiles: {},
    newProfile: { id: '', name: '', age: 0, email: '', phone: 0, password: '', completed: false },
    editProfile: { id: '', name: '', age: 0, email: '', phone: 0, password: '', completed: false },
    editProfileId: ''
  };
  

// Создание слайса Profile с использованием createSlice из Redux Toolkit
const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    addProfile: (state, action: PayloadAction<ProfileInterfase>) => {
      const newProfile = action.payload;
      const id = Date.now().toString();
      const profileWithId = { ...newProfile, id }; // Создаем новый объект с добавленным свойством id
      state.profiles[id] = profileWithId;
      state.newProfile = { id: '', name: '', age: 0, email: '', phone: 0, password: '', completed: false };
      console.log("Added to profile: " + id.toString() + " " + state.profiles[id].name + " " + state.profiles[id].completed);
    },
    removeProfile: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      delete state.profiles[id];
    },
    updateProfile: (state, action: PayloadAction<ProfileInterfase>) => {
      const updatedProfile = action.payload;
      const id = updatedProfile.id; // Теперь это допустимо
      state.profiles[id] = updatedProfile;
      state.editProfile = { id: '', name: '', age: 0, email: '', phone: 0, password: '', completed: false };
      state.editProfileId = '';
    },
    selectProfileForEdit: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const selectedProfile = state.profiles[id];
      if (selectedProfile) {
        state.editProfile = selectedProfile;
        state.editProfileId = id;
      }
    },
  },
});

export const { addProfile, removeProfile, updateProfile, selectProfileForEdit } = profilesSlice.actions;
export default profilesSlice.reducer;