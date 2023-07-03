import first from '../../assets/first.png'
import second from '../../assets/2nd.png'
import third from '../../assets/third.png'
import four from '../../assets/4th.png'
import five from '../../assets/5th.png'
import mb1 from '../../assets/mobile1.jpg'
import mb2 from '../../assets/mobile2.jpg'
import mb3 from '../../assets/mobile3.jpg'
import pr1 from '../../assets/pr2/pr1.png'
import pr2 from '../../assets/pr2/pr2.png'
import pr3 from '../../assets/pr2/pr3.png'
import pr4 from '../../assets/pr2/pr4.png'
import pr5 from '../../assets/pr2/pr5.png'
import pr6 from '../../assets/pr2/pr6.png'
import pr7 from '../../assets/pr2/pr7.png'
import pr2mobile1 from '../../assets/pr2/pr2mobile1.jpg'
import pr2mobile2 from '../../assets/pr2/pr2mobile2.jpg'
import lt1 from '../../assets/pr2/pr3/lt1.png'
import lt2 from '../../assets/pr2/pr3/lt2.png'
import lt3 from '../../assets/pr2/pr3/lt3.png'
import lt4 from '../../assets/pr2/pr3/lt4.png'
import lt5 from '../../assets/pr2/pr3/lt5.png'
import pr3mb1 from '../../assets/pr2/pr3/pr3mb1.jpg'
import pr3mb2 from '../../assets/pr2/pr3/pr3mb2.jpg'
import { AiFillGithub } from 'react-icons/ai';
import {  FaRegEye } from 'react-icons/fa';



import { useState } from 'react'
import Mobile1 from './mobile1'
import Mobile2 from './mobile1'


const Portfolio = () => {
    const [mobileView, setMobileView] = useState('pc')
    const [mobileView2, setMobileView2] = useState('pc2')
    const [mobileView3, setMobileView3] = useState('pc3')
    return (
        <div className="my-5 w-11/12 mx-auto" id='portfolio'>
            <h1 className="text-center my-10 text-4xl">Portfolio</h1>

            <div className='grid gap-20'>
            <div className='flex md:flex-row flex-col justify-center items-center gap-5'>
                <div className='md:w-full w-11/12 grid gap-2 activate p-5'>
                    <h1 className='text-3xl text-sky-600'>Toy MarketPlace</h1>
                    <p className='text-2xl text-sky-500'>Key Feature</p>
                    <span className='pl-5'>1.You can add, delete and update toys from here.</span>
                    <span className='pl-5'>2. You can found toys by category and view details.</span>
                    <span className='pl-5'>3. You can see your toys and all toys and also search toys</span>
                    <p className='text-2xl text-sky-500'>Technology</p>
                    <div className='grid md:grid-cols-5'>
                    <span className='pl-5'>REACT | </span>
                    <span className='pl-2'> Tailwind | </span>
                    <span className='pl-2'> Express | </span>
                    <span className='pl-2'> MongoDB | </span>
                    <span className='pl-2'> Firebase  </span>
                    </div>
                    <div>
                        <button className='flex items-center gap-3'><AiFillGithub></AiFillGithub> Github client</button>
                        <button className='flex items-center gap-3'><AiFillGithub></AiFillGithub> Github Server</button>
                        <button className='flex items-center gap-3'><FaRegEye></FaRegEye> Live Site</button>
                    </div>
                </div>
            <div className="w-full grid gap-2 relative ">
                {
                    mobileView === 'pc' ? <button onClick={()=>{setMobileView('mobile')}} className="hidden md:block z-30 -top-12 right-0 absolute btn btn-success w-36 mx-auto">mobile View</button> : <button onClick={()=>{setMobileView('pc')}} className="btn btn-success w-36 mx-auto">PC View</button>
                }
                
                {
                    mobileView === 'pc' ? <div className="w-[600px] hidden md:block z-10 h-72 border-2 border-black mx-auto overflow-hidden">
                    <div className='w-full   hover:-translate-y-[1000px]  hover:duration-[10s] overflow-hidden'>
                    <img src={first} alt="" className='w-full'/>
                    <img src={second} alt="" className='w-full' />
                    <img src={third} alt="" className='w-full' />
                    <img src={four} alt="" className='w-full' />
                    <img src={five} alt="" className='w-full' />
                    </div>
                </div> :
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
                }
                <div className='md:hidden block'>
                    <Mobile1></Mobile1>
                </div>
                    
                
            </div>
            </div>
            <div className='flex md:flex-row flex-col justify-center items-center gap-5'>
                <div className='md:w-full w-11/12 grid activate p-5 gap-2'>
                    <h1 className='text-3xl text-sky-600'>Bangladeshi Chefs Website</h1>
                    <p className='text-2xl text-sky-500'>Key Feature</p>
                    <span className='pl-5'>1.You can see our chefs and view their recipes. Lazy loading use in this project.</span>
                    <span className='pl-5'>2. You Can't see Chefs full details without login. Private route implements in this project</span>
                    <span className='pl-5'>3. You can see a blog section and download as a pdf. Instant download pdf like WebView</span>
                    <p className='text-2xl text-sky-500'>Technology</p>
                    <div className='grid md:grid-cols-5'>
                    <span className='pl-5'>REACT | </span>
                    <span className='pl-2'> Tailwind | </span>
                    <span className='pl-2'> Express | </span>
                    <span className='pl-2'> MongoDB | </span>
                    <span className='pl-2'> Firebase | </span>
                    <span className='pl-2'> Swiper js  </span>
                    </div>
                </div>
            <div className="w-full grid gap-5 relative">
                {
                    mobileView2 === 'pc2' ? <button onClick={()=>{setMobileView2('mobile2')}} className="hidden md:block z-30 -top-12  right-0  absolute btn btn-success w-36 mx-auto">mobile View</button> : <button onClick={()=>{setMobileView2('pc2')}} className="btn btn-success w-36 mx-auto">PC View</button>
                }
                
                {
                    mobileView2 === 'pc2' ? <div className="w-[600px] hidden md:block h-72 z-10  border-2 border-black mx-auto overflow-hidden">
                    <div className='w-full   hover:-translate-y-[1000px]  hover:duration-[10s] overflow-hidden'>
                    <img src={pr1} alt="" className='w-full'/>
                    <img src={pr2} alt="" className='w-full' />
                    <img src={pr3} alt="" className='w-full' />
                    <img src={pr4} alt="" className='w-full' />
                    <img src={pr5} alt="" className='w-full' />
                    <img src={pr6} alt="" className='w-full' />
                    <img src={pr7} alt="" className='w-full' />
                    </div>
                </div> :
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
                }
                <div className='md:hidden block'>
                    <Mobile2></Mobile2>
                </div>
            </div>
            </div>
            <div className='flex md:flex-row flex-col justify-center items-center gap-5'>
                <div className='md:w-full w-11/12 activate p-5 grid gap-2'>
                    <h1 className='text-3xl text-sky-600'>Training base Website</h1>
                    <p className='text-2xl text-sky-500'>Key Feature</p>
                    <span className='pl-5'>1.Instructor can Add classes and and instructor can update their classes, and see feedback.</span>
                    <span className='pl-5'>2. Admin can make a user to instructor and admin can delete a user, Admin can approve class.</span>
                    <span className='pl-5'>3. A student can booked classes and enrolled with payment using stripe, and see payment history.</span>
                    <p className='text-2xl text-sky-500'>Technology</p>
                    <div className='grid md:grid-cols-5'>
                    <span className='pl-5'>REACT | </span>
                    <span className='pl-2'> Tailwind | </span>
                    <span className='pl-2'> Express | </span>
                    <span className='pl-2'> MongoDB | </span>
                    <span className='pl-2'> Firebase | </span>
                    <span className='pl-2'> Stripe  </span>
                    </div>
                </div>
            <div className="w-full grid gap-5 relative ">
                {
                    mobileView3 === 'pc3' ? <button onClick={()=>{setMobileView3('mobile3')}} className="hidden md:block z-30 -top-12  right-0  absolute btn btn-success w-36 mx-auto">mobile View</button> : <button onClick={()=>{setMobileView3('pc3')}} className="btn btn-success w-36 mx-auto">PC View</button>
                }
                
                {
                    mobileView3 === 'pc3' ? <div className="w-[600px] hidden md:block  z-10 h-72 border-2 border-black mx-auto overflow-hidden">
                    <div className='w-full   hover:-translate-y-[1000px]  hover:duration-[10s] overflow-hidden'>
                    <img src={lt1} alt="" className='w-full'/>
                    <img src={lt2} alt="" className='w-full' />
                    <img src={lt3} alt="" className='w-full' />
                    <img src={lt4} alt="" className='w-full' />
                    <img src={lt5} alt="" className='w-full' />
                    </div>
                </div> :
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
                }
                <div className='md:hidden block'>
                    <Mobile1></Mobile1>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Portfolio;
