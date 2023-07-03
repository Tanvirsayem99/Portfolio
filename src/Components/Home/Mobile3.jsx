import pr3mb1 from '../../assets/pr2/pr3/pr3mb1.jpg'
import pr3mb2 from '../../assets/pr2/pr3/pr3mb2.jpg'

const Mobile3 = () => {
    return (
        <div className="mockup-phone relative">
        {/* <div className="camera"></div>  */}
        <div className='w-28 h-6   bg-black  '></div>
        <div className='w-28 h-8 rounded-3xl left-[110px] z-50 -top-4 bg-black mt-10 absolute'></div>
        <div className='w-32 h-1 rounded-lg left-[110px]  z-50 bottom-4 bg-black mt-10 absolute'></div>
    <div className="display">
        <div className="artboard artboard-demo phone-1">
        <div className='w-full   hover:-translate-y-[5100px]  duration-[20s] '>
       <img src={pr3mb1} alt="" className='w-full mt-[5130px]'/>
       <img src={pr3mb2} alt="" className='w-full' />
       
       
       </div>
        </div>
    </div>
   </div>
    );
};

export default Mobile3;