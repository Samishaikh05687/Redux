import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserStats } from '../../types';

const initialState: UserStats = {
  totalCarbonSaved: 0,
  streak: 0,
  level: 1,
  points: 0,
};

const userStatsSlice = createSlice({
  name: 'userStats',
  initialState,
  reducers: {
    updateCarbonSaved: (state, action: PayloadAction<number>) => {
      state.totalCarbonSaved += action.payload;
      state.points += Math.floor(action.payload * 10);
      if (state.points >= state.level * 1000) {
        state.level += 1;
      }
    },
    incrementStreak: (state) => {
      state.streak += 1;
      state.points += state.streak * 10;
    },
  },
});

export const { updateCarbonSaved, incrementStreak } = userStatsSlice.actions;
export default userStatsSlice.reducer;