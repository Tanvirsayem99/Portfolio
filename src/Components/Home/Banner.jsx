import Lottie from "lottie-react";
import programming from '../../../public/programning.json'


const Banner = () => {
    return (
        <div className="pt-16 flex md:flex-row flex-col justify-center items-center gap-52">
            <div>
                <span className=''>Hello I'm</span>
                <p className='text-4xl font-semibold'>Tanvir Haider Sayem</p>
                <p className='tet-2xl'>MERN Stack Web Developer</p>
            </div>
            <div className=''>
                
                <Lottie animationData={programming} loop={true} />
            </div>
        </div>
    );
};

export default Banner;