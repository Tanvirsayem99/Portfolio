import pr2mobile1 from '../../assets/pr2/pr2mobile1.jpg'
import pr2mobile2 from '../../assets/pr2/pr2mobile2.jpg'
const Mobile2 = () => {
    return (
        <div className="mockup-phone relative">
                    {/* <div className="camera"></div>  */}
                    <div className='w-28 h-6   bg-black  '></div>
                    <div className='w-28 h-8 rounded-3xl left-[110px] z-50 -top-4 bg-black mt-10 absolute'></div>
                    <div className='w-32 h-1 rounded-lg left-[110px]  z-50 bottom-4 bg-black mt-10 absolute'></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                    <div className='w-full   hover:-translate-y-[8860px]  duration-[20s] '>
                   <img src={pr2mobile1} alt="" className='w-full mt-[8900px]'/>
                   <img src={pr2mobile2} alt="" className='w-full' />
                   
                   
                   </div>
                    </div>
                </div>
               </div>
    );
};

export default Mobile2;