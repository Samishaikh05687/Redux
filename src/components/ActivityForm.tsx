import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Car, Home, Utensils } from 'lucide-react';
import { addActivity } from '../store/slices/activitiesSlice';
import { updateCarbonSaved } from '../store/slices/userStatsSlice';

export const ActivityForm = () => {
  const dispatch = useDispatch();
  const [activityType, setActivityType] = useState<'transport' | 'energy' | 'food'>('transport');
  const [details, setDetails] = useState<{[key: string]: string}>({});

  const calculateCarbonFootprint = () => {
    // Simplified calculation - in a real app, this would be more complex
    let footprint = 0;
    switch (activityType) {
      case 'transport':
        footprint = Number(details.distance) * 0.2; // 0.2kg CO2 per km
        break;
      case 'energy':
        footprint = Number(details.kwh) * 0.5; // 0.5kg CO2 per kWh
        break;
      case 'food':
        footprint = Number(details.meals) * 2.5; // 2.5kg CO2 per meal
        break;
    }
    return footprint;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const carbonFootprint = calculateCarbonFootprint();
    
    dispatch(addActivity({
      id: Date.now().toString(),
      type: activityType,
      date: new Date().toISOString(),
      carbonFootprint,
      details
    }));
    
    dispatch(updateCarbonSaved(carbonFootprint));
    setDetails({});
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Log Activity</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <button
            type="button"
            onClick={() => setActivityType('transport')}
            className={`p-4 rounded-lg flex flex-col items-center ${
              activityType === 'transport' ? 'bg-blue-100 text-blue-600' : 'bg-gray-50'
            }`}
          >
            <Car className="w-6 h-6 mb-2" />
            Transport
          </button>
          <button
            type="button"
            onClick={() => setActivityType('energy')}
            className={`p-4 rounded-lg flex flex-col items-center ${
              activityType === 'energy' ? 'bg-blue-100 text-blue-600' : 'bg-gray-50'
            }`}
          >
            <Home className="w-6 h-6 mb-2" />
            Energy
          </button>
          <button
            type="button"
            onClick={() => setActivityType('food')}
            className={`p-4 rounded-lg flex flex-col items-center ${
              activityType === 'food' ? 'bg-blue-100 text-blue-600' : 'bg-gray-50'
            }`}
          >
            <Utensils className="w-6 h-6 mb-2" />
            Food
          </button>
        </div>

        {activityType === 'transport' && (
          <div>
            <label className="block text-lg font-medium text-gray-700">Distance (km)</label>
            <input
              type="number"
              placeholder='Enter Distance'
              value={details.distance || ''}
              onChange={(e) => setDetails({ ...details, distance: e.target.value })}
              className="mt-1 p-2 block w-full rounded-md border-green-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        )}

        {activityType === 'energy' && (
          <div>
            <label className="block text-lg font-medium text-gray-700">Energy Used (kWh)</label>
            <input
              type="number"
              value={details.kwh || ''}
              onChange={(e) => setDetails({ ...details, kwh: e.target.value })}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        )}

        {activityType === 'food' && (
          <div>
            <label className="block text-lg font-medium text-gray-700">Number of Meals</label>
            <input
              type="number"
              value={details.meals || ''}
              onChange={(e) => setDetails({ ...details, meals: e.target.value })}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Log Activity
        </button>
      </form>
    </div>
  );
};