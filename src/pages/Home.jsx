import { Link } from "react-router-dom"
import { TiChevronRight } from "react-icons/ti";
import { useEffect, useState } from "react";

const Home = () => {
  const [tileCount, setTileCount] = useState(0);

  useEffect(() => {
    const calculateTiles = () => {
      let heroBg = document.getElementById('heroBackground');
      let rows = Math.floor(heroBg.clientHeight / 50);
      let columns = Math.floor(heroBg.clientWidth / 50);

      document.documentElement.style.setProperty('--tile-rows', rows);
      document.documentElement.style.setProperty('--tile-cols', columns);

      setTileCount(rows * columns);
    };

    calculateTiles();

    window.addEventListener('resize', calculateTiles);
  }, [])
  
  return (
    <>
      <div 
        id='heroBackground' 
        className='absolute top-0 left-0 h-[calc(100%+2px)] w-[calc(100%+2px)] -z-10 justify-center
          grid grid-rows-[repeat(var(--tile-rows),_1fr)] grid-cols-[repeat(var(--tile-cols),_1fr)] hero-bg-pan
          bg-gradient-to-r gradient from-colour-primary-600 via-colour-primary-500 to-colour-primary-600 bg-[size:200%] bg-opacity-5'
      >
        {Array.from(Array(tileCount)).map((index) => {
          return (
            <div className='bg-colour-bg-400 w-[calc(100%-2px)] h-[calc(100%-2px)]' key={index}></div>
          );
        })}
      </div>
      <div className='flex items-center h-svh-no-nav'>
        <div className='flex flex-col max-w-2xl sm:p-6 gap-6 text-colour-text-400 sm:bg-black sm:bg-opacity-25 sm:rounded-xl sm:backdrop-blur-sm sm:border-colour-primary-600 sm:border-2 sm:border-opacity-75'>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col'>
              <h4 className='text-2xl font-bold'>Solo Mod Dev</h4>
              <h1 className='text-7xl font-bold text-colour-text-500'>LieOnLion</h1>
            </div>
            <p className='text-xl'>I'm a solo Mod Developer for the game Minecraft. My mods have generated over 2.2 million downloads across a number of platforms.</p>
          </div>
          <div className='flex gap-4 sm:gap-6'>
            <Link to='/projects' 
              className='flex gap-1 pl-4 pr-3 py-3 sm:gap-2 sm:pl-6 sm:pr-5 sm:py-3 rounded-xl items-center text-sm sm:text-base uppercase font-bold cursor-pointer text-colour-text-500 bg-colour-primary-500'>
              My Projects<TiChevronRight className="text-base sm:text-xl" />
            </Link>
            <Link to='/about-me' 
              className='flex gap-1 pl-4 pr-3 py-3 sm:gap-2 sm:pl-6 sm:pr-5 sm:py-3 rounded-xl items-center text-sm sm:text-base uppercase font-bold cursor-pointer text-colour-text-400 bg-colour-primary-500 bg-opacity-20 border-2 border-colour-primary-500'>
              More About Me<TiChevronRight className="text-base sm:text-xl" />
            </Link>
          </div>
        </div>
        <div className='home-hero-img-wrapper w-70p h-auto absolute blur-md max-sm:home-hero-img-wrapper max-sm:w-120p'>
          <img src="/assets/v1/logo/svg/lieonlion.svg" alt="lieonlion-logo" className='w-full' />
        </div>
      </div>
    </>
  )
}

export default Home
