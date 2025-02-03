import { Leaf } from 'lucide-react';

const Navbar = () => {
    return (
        <div>
            <nav className="bg-[#65DF0C] text-white p-4 flex justify-center items-center">
            <div className="container mx-auto flex items-center">
                <Leaf className="w-8 h-8 mr-2" />
                <h1 className="text-2xl font-bold">EcoTrack</h1>
            </div>
            <div>
                <ul className="flex justify-center items-center gap-6 text-lg">
                    <li className="mr-4"><a href="#" className="text-white hover:border-b-2 hover:text-black transition-all">Home</a></li>
                    <li className="mr-4"><a href="#" className="text-white hover:border-b-2 hover:text-black">Articles</a></li>
                    <li className="mr-4"><a href="#" className="text-white hover:border-b-2 hover:text-black">Discover</a></li>
                </ul>
            </div>
        </nav></div>
    )
}

export default Navbar