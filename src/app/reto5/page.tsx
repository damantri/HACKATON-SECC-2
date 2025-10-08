'use client';

export default function Reto5() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center gap-6 text-white">
      <nav className="w-full max-w-5xl bg-[#1e293b] py-3 px-8 flex justify-between items-center shadow-lg">
        <div className="text-2xl font-bold">Navbar</div>

        <ul className="flex space-x-6 text-gray-300">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Features</li>
          <li className="hover:text-white cursor-pointer">Pricing</li>
          <li className="hover:text-white cursor-pointer">About</li>
        </ul>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-1 rounded-md text-black focus:outline-none"
          />
          <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-3 py-1 rounded-md transition">
            Search
          </button>
        </div>
      </nav>
      <nav className="w-full max-w-5xl bg-[#1e293b] py-3 px-8 flex justify-between items-center shadow-lg scale-x-[-1]">
        <div className="text-2xl font-bold">Navbar</div>

        <ul className="flex space-x-6 text-gray-300">
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>About</li>
        </ul>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-1 rounded-md text-black focus:outline-none"
          />
          <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-3 py-1 rounded-md transition">
            Search
          </button>
        </div>
      </nav>
    </div>
  );
}
