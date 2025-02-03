import { configureStore } from '@reduxjs/toolkit';
import activitiesReducer from './slices/activitiesSlice';
import userStatsReducer from './slices/userStatsSlice';

export const store = configureStore({
  reducer: {
    activities: activitiesReducer,
    userStats: userStatsReducer,
  },
});