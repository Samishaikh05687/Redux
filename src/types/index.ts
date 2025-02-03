export interface Activity {
  id: string;
  type: 'transport' | 'energy' | 'food';
  date: string;
  carbonFootprint: number;
  details: {
    [key: string]: any;
  };
}

export interface UserStats {
  totalCarbonSaved: number;
  streak: number;
  level: number;
  points: number;
}

export interface RootState {
  activities: Activity[];
  userStats: UserStats;
}