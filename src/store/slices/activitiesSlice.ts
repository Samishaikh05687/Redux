import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Activity } from '../../types';

const initialState: Activity[] = [];

const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    addActivity: (state, action: PayloadAction<Activity>) => {
      state.push(action.payload);
    },
    removeActivity: (state, action: PayloadAction<string>) => {
      return state.filter(activity => activity.id !== action.payload);
    },
  },
});

export const { addActivity, removeActivity } = activitiesSlice.actions;
export default activitiesSlice.reducer;