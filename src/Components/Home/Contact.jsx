import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import Message from "./Message";



const Contact = () => {
    return (
        <div id="contact">
            <h1 className="text-red-900 text-4xl my-10 text-center">Contact</h1>

            <div className="grid md:grid-cols-3 justify-center gap-5 items-center w-11/12 mx-auto ">
                <div className="activate text-center p-5">
                    <AiFillPhone className="text-3xl mx-auto my-5"></AiFillPhone>
                    <span>Phone</span>
                    <p>+8801690187372</p>
                </div>
                <div className="activate text-center p-5">
                    <AiOutlineMail className="text-3xl mx-auto my-5"></AiOutlineMail>
                    <span>Email</span>
                    <p>tanvirhadadersayem@gmail.com</p>
                </div>
                <div className="activate text-center p-5">
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