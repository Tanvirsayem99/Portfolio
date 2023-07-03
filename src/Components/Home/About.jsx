import person from '../../../public/person.png'
import facebook from '../../../public/facebook.svg'
import twitter from '../../../public/twitter.svg'
import linkedin from '../../../public/linkedin.svg'


const About = () => {
    return (
        <div className=" pt-16 " id="about">
            <h1 className="text-2xl font-semibold text-center">ABOUT ME</h1>

            <div className='flex flex-col md:flex-row justify-center items-center gap-52'>
                <div className='relative'>
                    <div className="box3">
                    </div>
                    <div className="box1 absolute top-[35px] left-[35px]">
                        <div className='w-4 h-4 rounded-full  bg-teal-400 absolute bottom-[98px]'></div>
                    </div>
                    <div className="box2  absolute top-[74px]  left-[75px]">
                    <div className='w-4 h-4 rounded-full bg-teal-500  absolute bottom-[72px]'></div>
                    </div>
                    
                    
                    
                    <div className='absolute top-[70px] right-[80px]  w-[240px] h-[240px] rounded-full bg-transparent bg-[#EFDCC0]'>
                    
                    <img src={person} alt="" className='w-[240px]  h-[240px] rounded-full' />
                    </div>
                    <div className='flex gap-5 absolute bottom-10 left-32'>
                        {/* <a href="https://www.facebook.com/tanvir.haider.12177"><img src={facebook} alt="" className='w-8' /></a>
                        <a href="#"><img src={twitter} alt=""  className='w-8'/></a>
                        <a href="#"><img src={linkedin} alt="" className='w-8' /></a> */}
                    </div>
                    
                    
                </div>
                <div className='md:w-2/6 grid gap-5 text-center'>
                    <p>Hi ! I’m Tanvir Haider. I am MERN Stack Web Developer, I have about six months of working experience on this field. If I discribe myself in one sentence then it will be "I am a speed learner." I love to learn new things.</p>
                    <p>I started my coding journey since I was in high school. Coding is like a passion for me. I love to code all day long, </p>
                </div>
            </div>
        </div>
    );
};

export default About;