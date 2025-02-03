import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { RootState } from '../types';
import { Trophy, Leaf, Zap } from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const Dashboard = () => {
  const activities = useSelector((state: RootState) => state.activities);
  const userStats = useSelector((state: RootState) => state.userStats);

  const chartData = {
    labels: activities.slice(-7).map(a => new Date(a.date).toLocaleDateString()),
    datasets: [{
      label: 'Carbon Footprint (kg CO2)',
      data: activities.slice(-7).map(a => a.carbonFootprint),
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  return (
    <div className="p-6 space-y-6">
      <div className='bg-[#a8e77c] rounded-2xl p-6 flex justify-between items-center '>
        <div>
        <h1 className='text-3xl font-bold mb-2'>Good Day, Eco Warrior!</h1>
        <p>One step closer to a greener planet</p>
        </div>
        <div className='bg-slate-200 rounded-2xl w-[45%] p-4 flex justify-between items-center shadow-lg'>
          <div >
            <h2 className='text-xl font-semibold mb-1'>Begin your eco journey</h2>
            <p>Consult an eco expert</p>
          </div>
          <button className='bg-[#65DF0C] rounded-full text-white py-2 px-8 font-semibold hover:scale-105 transition-all'>Consult</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 ">
        <div className="bg-green-100 p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <Leaf className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="text-lg font-semibold">Total Carbon Saved</h3>
              <p className="text-2xl font-bold text-green-600">{userStats.totalCarbonSaved.toFixed(2)} kg CO2</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <Trophy className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold">Level {userStats.level}</h3>
              <p className="text-2xl font-bold text-blue-600">{userStats.points} points</p>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <Zap className="w-8 h-8 text-yellow-600" />
            <div>
              <h3 className="text-lg font-semibold">Daily Streak</h3>
              <p className="text-2xl font-bold text-yellow-600">{userStats.streak} days</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md ">
        <h2 className="text-xl font-bold mb-4">Weekly Carbon Footprint</h2>
        <Line data={chartData} />
      </div>
    </div>
  );
};