import mb1 from '../../assets/mobile1.jpg'
import mb2 from '../../assets/mobile2.jpg'
import mb3 from '../../assets/mobile3.jpg'


const Mobile1 = () => {
    return (
        <div className="mockup-phone relative">
                    {/* <div className="camera"></div>  */}
                    <div className='w-28 h-6   bg-black  '></div>
                    <div className='w-28 h-8 rounded-3xl left-[110px] z-50 -top-4 bg-black mt-10 absolute'></div>
                    <div className='w-32 h-1 rounded-lg left-[110px]  z-50 bottom-4 bg-black mt-10 absolute'></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                    <div className='w-full   hover:-translate-y-[7865px]  duration-[20s] '>
                   <img src={mb1} alt="" className='w-full mt-[7790px]'/>
                   <img src={mb2} alt="" className='w-full' />
                   <img src={mb3} alt="" className='w-full' />
                   
                   </div>
                    </div>
                </div>
               </div>
    );
};

export default Mobile1;