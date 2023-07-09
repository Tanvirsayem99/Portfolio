import { useEffect } from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import Message from "./Message";
import AOS from "aos";
import "aos/dist/aos.css";


const Contact = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div id="contact" className="w-11/12 mx-auto">
            <h1 className="text-2xl mt-10 font-semibold text-center  text-rose-600 overflow-hidden" data-aos="fade-down">Contact</h1>
            <div className='w-20 mt-2 h-1 mb-10 mx-auto bg-indigo-400'></div>
            <div className="grid md:grid-cols-3 justify-center gap-5 items-center w-11/12 mx-auto ">
                <div className="activate text-center p-5 overflow-hidden" data-aos="fade-right">
                    <AiFillPhone className="text-3xl mx-auto my-5"></AiFillPhone>
                    <span>Phone</span>
                    <p>+8801690187372</p>
                </div>
                <div className="activate text-center p-5 overflow-hidden" data-aos="fade-down">
                    <AiOutlineMail className="text-3xl mx-auto my-5"></AiOutlineMail>
                    <span>Email</span>
                    <p>tanvirhadadersayem@gmail.com</p>
                </div>
                <div className="activate text-center p-5 overflow-hidden" data-aos="fade-left">
                    <SlLocationPin className="text-3xl mx-auto my-5"></SlLocationPin>
                    <span>Address</span>
                    <p>Feni, Bangladesh</p>
                </div>
            </div>
            <Message></Message>
        </div>
    );
};

export default Contact;