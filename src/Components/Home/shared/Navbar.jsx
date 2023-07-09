import tanvirResume from '../../../../public/tanvirResume.pdf'

const Navbar = () => {
    return (
        <div className="navbar  navBg z-50 fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <a href="/" className='text-rose-500'>HOME</a>
           <a href="#about" className='text-rose-500'>ABOUT</a>
           <a href="#service" className='text-rose-500'>SERVICES</a>
           <a href="#skills" className='text-rose-500'>SKILLS</a>
           <a href="#portfolio" className='text-rose-500'>PORTFOLIO</a>
           <a href="#contact" className='text-rose-500'>CONTACT</a>
            </ul>
          </div>
          <a href='/' className="btn btn-ghost normal-case text-xl text-rose-500">Tanvir</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-5 font-semibold">
           <a href="/" className='text-rose-500'>HOME</a>
           <a href="#about" className='text-rose-500'>ABOUT</a>
           <a href="#service" className='text-rose-500'>SERVICES</a>
           <a href="#skills" className='text-rose-500'>SKILLS</a>
           <a href="#portfolio" className='text-rose-500'>PORTFOLIO</a>
           <a href="#contact" className='text-rose-500'>CONTACT</a>
          </ul>
        </div>
        
      </div>
    );
};

export default Navbar;