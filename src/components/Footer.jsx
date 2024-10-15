import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex flex-col mt-auto px-page max-sm:px-page py-8 gap-7 border-t bg-colour-bg-500 border-colour-bg-300 text-colour-text-400'>
      <div className='flex flex-row max-sm:flex-col max-sm:gap-4 justify-between items-center w-full'>
        <div className='flex items-center gap-5'>
          <svg className='w-8 h-8'><use href="/assets/v1/logo/svg/lieonstudios.svg#studio-logo" className='fill-colour-primary-500 scale-32'></use></svg>
          <p className='font-bold'>LieOn Studios</p>
        </div>
        <div className='flex gap-4'>
          <a href="https://discord.gg/sA42pp6cuX">
            <svg className='w-6 h-6'><use href="/assets/v1/social/svg/round-solid.svg#discord"></use></svg>
          </a>
          <a href="https://youtube.com/@lieonlion?sub_confirmation=1">
            <svg className='w-6 h-6'><use href="/assets/v1/social/svg/round-solid.svg#youtube"></use></svg>
          </a>
          <a href="https://tiktok.com/@slushieposts">
            <svg className='w-6 h-6'><use href="/assets/v1/social/svg/round-solid.svg#tiktok"></use></svg>
          </a>
          <a href="https://modrinth.com/user/lieonlion">
            <svg className='w-6 h-6'><use href="/assets/v1/social/svg/round-solid.svg#modrinth"></use></svg>
          </a>
          <a href="https://curseforge.com/members/lieonlion/">
            <svg className='w-6 h-6'><use href="/assets/v1/social/svg/round-solid.svg#curseforge"></use></svg>
          </a>
        </div>
      </div>
      <div className='h-px px-6 bg-gradient-to-r-line'></div>
      <div className='flex flex-row max-sm:flex-col max-sm:gap-12 justify-between w-full'>
        <div className='w-full flex flex-col gap-8'>
          <div className='flex flex-col gap-2'>
            <p className='font-bold'>Pages</p>
            <div className='footer-links-list flex flex-col'>
              <Link to='/'>Home</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/about-me'>About me</Link>
              <Link to='/donate'>Donate</Link>
              <Link to='/comparer'>Comparer</Link>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col gap-8'>
          <div className='flex flex-col gap-2'>
            <p className='font-bold'>Projects</p>
            <div className='footer-links-list flex flex-col'>
              <Link to='/project/more-chest-variants'>More Chest Variants</Link>
              <Link to='/project/quad'>Quad</Link>
              <Link to='/project/enderite'>Enderite</Link>
              <Link to='/projects'>More..</Link>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col gap-8'>
          <div className='flex flex-col gap-2'>
            <p className='font-bold'>Contact Me</p>
            <div className='footer-links-list flex flex-col'>
              <a href="mailto:lieonlion4@gmail.com">lieonlion4@gmail.com</a>
              <a href="https://discord.gg/sA42pp6cuX">discord.gg/sA42pp6cuX</a>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-bold'>My Other Sites</p>
            <div className='footer-links-list flex flex-col'>
              <a href="https://lieonstudios.github.io/">lieonstudios.github.io</a>
            </div>
          </div>
        </div>
      </div>
      <div className='h-px px-6 bg-gradient-to-r-line'></div>
      <div className='flex flex-row max-sm:flex-col max-sm:gap-4 justify-between items-center w-full'>
        <p>LieOn Studios &copy; 2024 LieOnLion</p>
        <p>Site designer and developer, LieOnLion</p>
      </div>
    </footer>
  );
};

export default Footer
