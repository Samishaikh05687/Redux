import EcoIcon from "./EcoIcon";
import { TreePine, Wind, Sprout } from 'lucide-react';

const offsetProjects = [
  {
    id: 1,
    name: 'Reforestation Project',
    description: 'Support tree planting initiatives in the Amazon rainforest',
    price: 25,
    impact: '1 ton CO2',
    icon: TreePine
  },
  {
    id: 2,
    name: 'Wind Energy',
    description: 'Invest in wind farm development in developing countries',
    price: 35,
    impact: '1.5 tons CO2',
    icon: Wind
  },
  {
    id: 3,
    name: 'Sustainable Agriculture',
    description: 'Support regenerative farming practices',
    price: 20,
    impact: '0.8 tons CO2',
    icon: Sprout
  }
];

export const CarbonOffsets = () => {


  return (
    <div className="p-6">
      <h2 className="text-3xl font-serif font-bold mb-6 text-center ">Carbon Offset Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offsetProjects.map((project) => {
          const Icon = project.icon;
          return (
            // <div key={project.id} className="bg-white rounded-lg shadow-md p-6">
            //   <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
            //     
            //   </div>
            //   <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            //   <p className="text-gray-600 mb-4">{project.description}</p>
            //   <div className="flex justify-between items-center mb-4">
            //     <span className="text-lg font-bold">${project.price}</span>
            //     <span className="text-green-600">{project.impact}</span>
            //   </div>
            //   <button
            //     className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            //   >
            //     Purchase Offset
            //   </button>
            // </div>
            /* From Uiverse.io by SmookyDev */
            <div key={project.id}
              className="m-2 group px-10 py-5 bg-green-100 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all"
            >
              <EcoIcon />
              
              <p
                className="cardtxt font-semibold text-green-900 tracking-wider group-hover:text-gray-700 text-xl flex gap-2 "
              >
                {project.name} <Icon className="w-6 h-6 text-green-600" />
              </p>
              <p className="blueberry font-semibold text-gray-600 text-xs text-center">
                {project.description}
              </p>
              <div className="ordernow flex flex-row justify-between items-center w-full">
                <p
                  className="ordernow-text text-green-950 font-semibold group-hover:text-white"
                >
                  ₹{project.price}
                </p>
                <p
                  className="ordernow-text text-green-950 font-semibold group-hover:text-white"
                >
                  {project.impact}
                </p>

              </div>
              <button
                className=" lg:inline-flex items-center gap-3 group-hover:bg-white bg-[#abd373] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn"
              >
                Order Now
              </button>
            </div>

          );
        })}
      </div>
    </div>
  );
};