import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  id: number | null;
}

const initialState: UserState = {
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    change(state, action: PayloadAction<UserState>) {
      state.id = action.payload.id;
    },
  },
});

export const { change } = userSlice.actions;
export default userSlice.reducer;
