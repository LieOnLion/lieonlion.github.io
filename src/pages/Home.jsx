import { Link } from "react-router-dom"
import { TiChevronRight } from "react-icons/ti";

function Home() {
  return (
    <div className='flex items-center h-svh-no-nav'>
      <div className='flex flex-col max-w-xl gap-6 text-colour-text-400'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col'>
            <h4 className='text-2xl font-bold'>Solo Mod Dev</h4>
            <h1 className='text-7xl font-bold text-colour-text-500'>LieOnLion</h1>
          </div>
          <p className='text-xl'>I'm a solo Mod Developer for the game Minecraft. My mods have generated over 2.0 million downloads across a number of platforms.</p>
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
        <div className='home-hero-img-gradient w-full h-full absolute'></div>
        <img src="/assets/v1/logo/png/lieonlion.png" alt="lieonlion-logo" className='w-full' />
      </div>
    </div>
  )
}

export default Home
