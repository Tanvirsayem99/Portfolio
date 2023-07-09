import { useEffect, useState } from "react";
import firstLanguage from '../../../public/html5.svg'
import css from '../../../public/css.svg'
import java from '../../../public/java.svg'
import react5 from '../../../public/react5.svg'
import { FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

//useEffect

const Skills = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [skill, setSkill] = useState('skill')
  return (
    <div id="skills" className="">
      <div data-aos="fade-down" className="flex overflow-hidden gap-5 justify-center my-10">
      <h1 className={`cursor-pointer px-4 py-1 ${skill === 'skill'&& ' activate rounded-lg text-red-500 '}`} onClick={()=>setSkill('skill')}> Skill</h1>
      <h1 className={`cursor-pointer px-4 py-1 ${skill === 'education'&& ' activate rounded-lg text-red-500 '}`} onClick={()=>setSkill('education')}> Education</h1>
      </div>
        {
          skill === 'skill' ?
          <div className="grid md:grid-cols-4 gap-10 justify-center items-center">
        <div data-aos="fade-up" className="relative overflow-hidden">
        <div className="border-8 border-teal-500 rounded-full   border-dotted animate-spin animate5-spin    w-40 mx-auto h-40" >
        </div>
        <div data-aos="fade-up" className="grid absolute top-12 overflow-hidden md:right-auto right-14  md:left-32">
          <h1 className="text-center font-serif"> HTML</h1>
          <img src={firstLanguage} alt="" className="w-8 mx-auto" />
        </div>
        </div>
        <div data-aos="fade-up" className="relative overflow-hidden">
        <div className="border-8 border-teal-500 rounded-full   border-dotted animate-spin animate5-spin    w-40 mx-auto h-40" >
        </div>
        <div className="grid absolute top-12 md:right-auto right-16  md:left-32  md:ml-2">
          <h1 className="text-center font-serif"> CSS</h1>
          <img src={css} alt="" className="w-8 mx-auto" />
        </div>
        </div>
        <div data-aos="fade-up" className="relative overflow-hidden">
        <div className="border-8 border-teal-500 rounded-full   border-dotted animate-spin  animate5-spin   w-40 mx-auto h-40" >
        </div>
        <div className="grid absolute top-12 md:right-auto right-10  md:left-28">
          <h1 className="text-center font-serif"> JavaScript</h1>
          <img src={java} alt="" className="w-8 mx-auto" />
        </div>
        </div>
        <div data-aos="fade-up" className="relative overflow-hidden">
        <div className="border-8 border-teal-500 rounded-full   border-dotted animate-spin animate5-spin   w-40 mx-auto h-40" >
        </div>
        <div className="grid absolute top-12 md:right-auto right-12  md:left-32">
          <h1 className="text-center font-serif">React JS</h1>
          <img src={react5} alt="" className="w-8 mx-auto" />
        </div>
        </div>
        <div data-aos="fade-up" className="relative overflow-hidden">
        <div className="border-8 border-teal-500 rounded-full   border-dotted animate-spin animate5-spin    w-40 mx-auto h-40" >
        </div>
        <div className="grid absolute top-12 md:right-auto right-10  md:left-28 md:ml-2">
          <h1 className="text-center font-serif">MongoDB</h1>
          <BiLogoMongodb className="text-5xl text-green-500  mx-auto"></BiLogoMongodb>
        </div>
        </div>
        <div data-aos="fade-up" className="relative overflow-hidden">
        <div className="border-8 border-teal-500 rounded-full   border-dotted animate-spin  animate5-spin  w-40 mx-auto h-40" >
        </div>
        <div className="grid absolute top-12 md:right-auto right-12  md:left-32">
          <h1 className="text-center font-serif">Tailwind</h1>
          <BiLogoTailwindCss className="text-5xl text-green-500 mx-auto"></BiLogoTailwindCss>
        </div>
        </div>
        <div data-aos="fade-up" className="relative overflow-hidden">
        <div className="border-8 border-teal-500 rounded-full   border-dotted animate-spin animate5-spin   w-40 mx-auto h-40" >
        </div>
        <div className="grid absolute top-12 md:right-auto right-10  md:left-28 ml-2 ">
          <h1 className="text-center font-serif">Bootstrap</h1>
          <FaBootstrap className="text-5xl text-green-500 mx-auto"></FaBootstrap>
        </div>
        </div>
        <div data-aos="fade-up" className="relative overflow-hidden">
        <div className="border-8 border-teal-500 rounded-full   border-dotted animate-spin  animate5-spin  w-40 mx-auto h-40" >
        </div>
        <div className="grid absolute top-12 md:right-auto right-10  md:left-28">
          <h1 className="text-center font-serif">Express JS</h1>
          <SiExpress className="text-5xl text-green-500 mx-auto"></SiExpress>
        </div>
        </div>
        <div data-aos="fade-up" className="relative overflow-hidden">
        <div className="border-8 border-teal-500 rounded-full   border-dotted animate-spin  animate5-spin  w-40 mx-auto h-40" >
        </div>
        <div className="grid absolute top-12 md:right-auto right-12  md:left-32">
          <h1 className="text-center font-serif">Node JS</h1>
        <FaNodeJs className="text-5xl text-green-500 mx-auto "></FaNodeJs>
        </div>
        </div>
      </div>
      : <div className="flex md:flex-row flex-col items-center gap-5 justify-center my-10">
        <div className="activate w-80 md:w-96 p-5 overflow-hidden" data-aos="fade-up">
          <h1 className="text-center text-pink-800 font-semibold">2008 - 2019</h1>
          <p className="my-2">Primary and secondary Education</p>
          <p>I admitted on class one at Al-Jameatul millia dakhil madrasha, sharishadi, feni. in 2008 and studied there till class ten (2019).</p>
        </div>
        <div className="activate w-80 md:w-96 p-5 overflow-hidden" data-aos="fade-up">
          <h1 className="text-center text-pink-800 font-semibold">2019 - 2023</h1>
          <p className="my-2">Higher Secondary Education</p>
          <p>I admitted on diploma in engineering at Feni Government Computer institute, Feni, in 2019 and studied there till Now (2023).</p>
        </div>
      </div>
        }
      
    </div>
  );
};

export default Skills;
