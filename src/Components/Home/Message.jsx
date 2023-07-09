import { useEffect, useRef, useState } from "react";
import { GiNetworkBars } from "react-icons/gi";
import { BiWifi } from "react-icons/bi";
import { BsBatteryFull, BsFillArrowUpCircleFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
const Message = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    const [timed, setTimed] = useState('')
    const [done, setDone] = useState('')
    const form = useRef();
        const newTime = () =>{
            var d = new Date().toLocaleTimeString();
        setTimed(d)
        }
        setInterval(newTime, 1000)
        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs
              .sendForm(
                "service_bozem2f",
                "template_48a0fz4",
                form.current,
                "D78T8Co0Iv4ILyOj-"
              )
              .then(
                (result) => {
                  console.log(result.text);
                  console.log("message sent");
                  setDone('done')
                  e.target.reset()
                },
                (error) => {
                  console.log(error.text);
                }
              );
          };
        
    
    return (
        <div className=" my-10">
            <h1 className="text-2xl font-semibold text-center  text-rose-600">Send Email Here</h1>
            <div className='w-20 mt-2 mb-10 h-1 mx-auto bg-indigo-400'></div>
            <div className="flex justify-center items-center">
            <div className="mockup-phone relative overflow-hidden " data-aos="zoom-in-up">
                    {/* <div className="camera"></div>  */}
                    <div className='w-28 h-6   bg-black  '></div>
                    <div className="absolute top-4 left-8 text-sm text-white font-semibold">{timed}</div>
                    <div className="text-white  absolute flex top-4 gap-2 right-10 text-sm">
                        <GiNetworkBars></GiNetworkBars>
                        <BiWifi></BiWifi>
                        <BsBatteryFull></BsBatteryFull>
                    </div>
                    <div className={`w-28 h-8 rounded-3xl left-[110px] z-50 -top-4 bg-black mt-10 absolute ${done === 'done' && ''}`}></div>
                    <div className='w-32 h-1 rounded-lg left-[110px]  z-50 bottom-4 bg-black mt-10 absolute'></div>
                <div className="display">
                    <div className="artboard artboard-demo bg-slate-800  phone-1">
                    <div className="h-[510px] mt-auto bg-white w-full rounded-tl-2xl rounded-tr-2xl">
                        <div className="bg-slate-400 w-12 mt-1 h-1 rounded-2xl mx-auto"></div>
                        <form ref={form} onSubmit={sendEmail} className="">
                        <div className="flex justify-around items-center">
                            <h1 className="text-2xl font-semibold">something about </h1>
                            <button><BsFillArrowUpCircleFill className="text-sky-600 text-2xl" ></BsFillArrowUpCircleFill></button>
                        </div>
                        
                        <div className="flex mt-3  ml-2">
                            <span className="text-gray-500 pl-2 mb-3">To :</span><p className="text-sky-500 pl-2">tanvirhadadersayem@gmail.com</p>
                            
                        </div>
                        <div className="h-0.5 w-11/12 bg-slate-400 mx-auto"></div>
                        <div className="flex mt-3 ml-2">
                            <span className="text-gray-500 pl-2 mb-3">Name :</span> <input type="text" name="user_name" className="bg-white outline-none pl-2 mb-3"/>
                            
                        </div>
                        <div className="h-0.5 w-11/12 bg-slate-400 mx-auto"></div>
                        <div className="flex mt-3 ml-2">
                            <span className="text-gray-500 pl-2 mb-3">From :</span> <input type="email" className='bg-white outline-none text-sky-500 mb-3 ml-2 w-60' name="user_email" />
                            
                        </div>
                        <div className="h-0.5 w-11/12 bg-slate-400 mx-auto"></div>
                        <textarea name="message" placeholder="message" className="bg-white w-full h-80 pl-4 outline-none" />
               
        
      </form>
    
                    </div>
                    </div>
                </div>
               </div>
            </div>
               
               
        </div>
    );
};

export default Message;