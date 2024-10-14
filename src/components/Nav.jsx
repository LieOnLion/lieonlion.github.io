import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className='flex justify-between items-center sticky top-0 z-10 px-page max-sm:px-page h-14 shadow-nav backdrop-blur-lg bg-colour-bg-500 bg-opacity-75 border-b border-colour-bg-300 text-colour-text-400'>
      <div>
        <NavLink to='/' className='font-bold text-xl'>LOGO</NavLink>
      </div>
      <li className='flex gap-8 max-sm:gap-6 font-bold'>
        <ul><NavLink to='/projects'>Projects</NavLink></ul>
        <ul><NavLink to='/about-me'>About Me</NavLink></ul>
        <ul><NavLink to='/donate'>Donate</NavLink></ul>
      </li>
    </nav>
  );
}

export default Nav;