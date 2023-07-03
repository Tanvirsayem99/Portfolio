import tanvirResume from '../../../../public/tanvirResume.pdf'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <a href="/">HOME</a>
           <a href="#about">ABOUT</a>
           <a href="#service">SERVICES</a>
           <a href="#skills">SKILLS</a>
           <a href="#portfolio">PORTFOLIO</a>
           <a href="#contact">CONTACT</a>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-5 font-semibold">
           <a href="/">HOME</a>
           <a href="#about">ABOUT</a>
           <a href="#service">SERVICES</a>
           <a href="#skills">SKILLS</a>
           <a href="#portfolio">PORTFOLIO</a>
           <a href="#contact">CONTACT</a>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn" href="../../../../public/tanvirResume.pdf">Download MY Resume</a>
        </div>
      </div>
    );
};

export default Navbar;