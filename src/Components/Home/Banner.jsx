import React from "react";
import Lottie from "lottie-react";
import programming from '../../../public/programning.json'
import { FiDownload } from 'react-icons/fi';
import Typed from "typed.js";
import { BsCloudSun } from 'react-icons/bs';
import resume from './tanvirResume.pdf'
const Banner = () => {
  
    const el = React.useRef(null);

  React.useEffect(() => {
    
    const typed = new Typed(el.current, {
      strings: ["MERN Stack Web Developer", "Web Designer", "Backend developer"],
      typeSpeed: 50,
      loop:true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
    return (
        <>
        <div className="pt-16 flex md:flex-row flex-col justify-center items-center gap-5 md:gap-52 relative w-11/12 mx-auto">
            <div className="grid md:gap-2 justify-center items-center">
                <span className=''>Hello I'm</span>
                <p className='text-4xl  font-semibold'>Tanvir Haider Sayem</p>
                <div className="App text-2xl font-bold text-pink-400 md:text-left hid text-center">
          <span ref={el} />
        </div>
                <p className='tet-2xl'></p>
                <p className="md:w-[500px] w-[350px] text-justify md:text-left mb-5 font-semibold">I Am professional react developer and comportable to work with server side and database. I am stable to work with team and make unique webpage template. I want to be a super performing MERN Stack Developer.</p>
                <a className="btn bg-slate-200 flex text-black w-52 border md:mx-0 mx-auto border-yellow-400 " href={resume} download>Download Resume <FiDownload></FiDownload></a>
            </div>
            <div className=''>
                <img src="https://i.ibb.co/YBdkg0s/Pngtree-black-grainy-misty-ink-5480678.png" alt="" className="absolute bottom-0 md:-top-10 md:right-52 w-64 md:w-[900px] rotate-45 -z-50 opacity-60"  />
                <BsCloudSun className="absolute z-50 text-6xl text-red-200 cloud "  ></BsCloudSun>
                <Lottie animationData={programming} className='md:w-96 w-72 ' loop={true} />
            </div>
        </div>
        
        </>
    );
};

export default Banner;