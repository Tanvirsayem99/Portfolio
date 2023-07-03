import { useState } from "react";
import firstLanguage from '../../../public/html5.svg'
import css from '../../../public/css.svg'
import java from '../../../public/java.svg'
import react5 from '../../../public/react5.svg'
import { FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  const [skill, setSkill] = useState('skill')
  return (
    <div id="skills">
      <div className="flex gap-5 justify-center my-10">
      <h1 className={`cursor-pointer px-4 py-1 ${skill === 'skill'&& ' activate rounded-lg text-red-500 '}`} onClick={()=>setSkill('skill')}> Skill</h1>
      <h1 className={`cursor-pointer px-4 py-1 ${skill === 'education'&& ' activate rounded-lg text-red-500 '}`} onClick={()=>setSkill('education')}> Education</h1>
      </div>
        {
          skill === 'skill' ?
          <div className="grid md:grid-cols-4 gap-10 justify-center items-center">
        <div className="radial-progress mx-auto w-40  h-40" style={{ "--value": 90 }}>
          <div className="grid">
          <img src={firstLanguage} alt="" className="w-8" />
          <p>90%</p>
          </div>
        </div>
        <div className="radial-progress w-40 mx-auto  h-40" style={{ "--value": 80 }}>
        <div className="grid">
        <img src={css} alt="" className="w-8" />
          <p>80%</p>
          </div>
        </div>
        <div className="radial-progress w-40 mx-auto   h-40" style={{ "--value": 70 }}>
        <div className="grid">
          <img src={java} alt="" className="w-8" />
          <p>70%</p>
          </div>
        </div>
        <div className="radial-progress w-40 mx-auto h-40" style={{ "--value": 95 }}>
        <div className="grid">
          <img src={react5} alt="" className="w-8" />
          <p>95%</p>
          </div>
        </div>
        <div className="radial-progress w-40 mx-auto h-40" style={{ "--value": 99 }}>
        <div className="grid">
        <BiLogoMongodb className="text-5xl text-green-500"></BiLogoMongodb>
          <p>99%</p>
          </div>
        </div>
        <div className="radial-progress w-40 mx-auto h-40" style={{ "--value": 90 }}>
        <div className="grid">
        <BiLogoTailwindCss className="text-5xl text-green-500"></BiLogoTailwindCss>
          <p>90%</p>
          </div>
        </div>
        <div className="radial-progress w-40 mx-auto h-40" style={{ "--value": 90 }}>
        <div className="grid">
        <FaBootstrap className="text-5xl text-green-500"></FaBootstrap>
          <p>90%</p>
          </div>
        </div>
        <div className="radial-progress w-40 h-40 mx-auto" style={{ "--value": 90 }}>
        <div className="grid">
        <SiExpress className="text-5xl text-green-500"></SiExpress>
          <p>90%</p>
          </div>
        </div>
        <div className="radial-progress w-40 mx-auto h-40" style={{ "--value": 90 }}>
        <div className="grid">
        <FaNodeJs className="text-5xl text-green-500"></FaNodeJs>
        
          <p>90%</p>
          </div>
        </div>
      </div>
      : ''
        }
      
    </div>
  );
};

export default Skills;
