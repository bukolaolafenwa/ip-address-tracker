import { useEffect, useState } from "react";
import type { IpData } from "./types/ip";
import { fetchIPData } from "./services/ipApi";
import './App.css'
import InfoCard from './components/InfoCard'
import MapView from './components/MapView'
import SearchBar from './components/SearchBar'
import bgdesktop from './assets/images/pattern-bg-desktop.png'
import bgmobile from './assets/images/pattern-bg-mobile.png'
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [ipData, setIpData] = useState<IpData | null>(null);
   useEffect(() => {

  const getData = async () => {
    try {

      const data = await fetchIPData();

      setIpData(data);

    } catch (error) {
      console.log(error);
    }
  };

  getData();

}, []);

const handleSearch = async (query: string) => {
 
  try {
    const data = await fetchIPData(query);
    setIpData(data);

  } catch (error) {
    console.log("SEARCH ERROR:", error);
  }
};

  return (
    <main 
    className='min-h-screen'>
      <section 
      className="relative px-6 pt-12 pb-64 min-h-[280px] bg-cover bg-center items-center text-center"
      style={{backgroundImage: `url(${bgmobile})`,
    }}
      >

      <div 
      className='hidden md:block absolute inset-0 bg-cover bg-center'
      style={{backgroundImage: `url(${bgdesktop})`,
    }}
      />

    <div className='relative z-6 max-w-8xl mx-auto flex flex-col items-center text-center justify-center gap-6 mt-14'>
      <h2 className='text-lg md:text-2xl text-white font-normal mt-20 mb-6 pl-4 tracking-wide leading-normal pt-4'>
        IP Address Tracker
      </h2>

     <SearchBar onSearch={handleSearch} />
     <InfoCard ipData={ipData} />
    </div>

    </section>

   <MapView ipData={ipData} />
   <Analytics />

    </main>
  );
}

export default App;
