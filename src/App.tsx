import { Provider } from 'react-redux';
import { store } from './store';
import { Dashboard } from './components/Dashboard';
import { ActivityForm } from './components/ActivityForm';
import { CarbonOffsets } from './components/CarbonOffsets';
import Navbar from './components/Navbar';


function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <main className="container mx-auto py-8">
          <Dashboard />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 mr-8">
            <ActivityForm />
            <div className="flex items-start bg-orange-200 p-8 rounded-2xl border border-orange-400 w-[80%] ">
              <div className="flex flex-col items-start">
                <h2 className=" text-2xl font-bold text-orange-900 mb-8">Tips to Reduce Your Footprint</h2>
                <ul className="space-y-2 font-serif">
                  <li>• Use public transportation or bike when possible</li>
                  <li>• Switch to energy-efficient appliances</li>
                  <li>• Reduce meat consumption</li>
                  <li>• Use reusable bags and containers</li>
                  <li>• Plant trees or support reforestation projects</li>
                </ul>

              </div>

            </div>
          </div>
          <div className="mt-20">
            <CarbonOffsets />
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;