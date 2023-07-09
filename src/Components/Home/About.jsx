import person from '../../../public/person.png'
import { BiLogoMongodb, BiLogoReact } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from 'react-icons/fa';
import { TbFidgetSpinner } from 'react-icons/tb';
import { GiBeveledStar } from 'react-icons/gi';
import color from '../../../public/colors.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

//useEffect

const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className=" pt-16 w-11/12 mx-auto " id="about">
            <h1 className="text-2xl font-semibold text-center  text-rose-600">ABOUT ME</h1>
            <div className='w-20 mt-2 h-1 mx-auto bg-indigo-400'></div>

            <div className='flex flex-col md:flex-row justify-center  items-center md:gap-52'>
                <div data-aos="fade-right" className='overflow-hidden relative my-10'>
                <TbFidgetSpinner className='text-6xl absolute text-red-500 animate-spin'></TbFidgetSpinner>
                <GiBeveledStar className='text-6xl absolute top-72 right-0 text-red-500 animate-spin'></GiBeveledStar>
                <BiLogoMongodb className="text-5xl text-green-500 absolute left-10 top-20 icon-animate"></BiLogoMongodb>
                <SiExpress className="text-5xl text-green-500 absolute left-20 top-20  icon-animate"></SiExpress>
                <BiLogoReact className="text-red-500 z-50 text-5xl absolute animate5-spin top-20 left-60 to-zinc-50 animate-spin"></BiLogoReact>
                <FaNodeJs className="text-5xl text-green-500 absolute top-20 left-72 icon-animate"></FaNodeJs>
               
                <div className=' h-96 md:w-96 w-[350px] sayem '>
                <img src={person} alt="" className='absolute h-64 left-24 icon-animate'/>
                <p className='absolute bottom-14 left-32 icon-animate text-4xl text-white'>MERN</p>
                </div>
                   
                </div>
                <div data-aos="fade-left" className='md:w-2/6 overflow-x-hidden grid gap-5 text-center'>
                    <p className='font-semibold'>Hi ! I’m Tanvir Haider. I am MERN Stack Web Developer, I have about six months of working experience on this field. If I discribe myself in one sentence then it will be "I am a speed learner." I love to learn new things.</p>
                    <p className='font-semibold'>I started my coding journey since I was in high school. Coding is like a passion for me. I love to code all day long, </p>
                </div>
            </div>
        </div>
    );
};

export default About;