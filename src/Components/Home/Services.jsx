import { TbDeviceImacCode } from "react-icons/tb";
import { BiCodeAlt } from "react-icons/bi";
import { SlScreenDesktop } from "react-icons/sl";

const Services = () => {
    return (
        <div id="service">
            <h1 className="text-3xl text-center">Services</h1>
            <div className="flex md:flex-row flex-col items-center justify-center gap-10 w-11/12 mx-auto text-center my-5">
                <div className="activate md:w-2/6 p-5">
                <SlScreenDesktop className="text-4xl text-center mx-auto mb-5"></SlScreenDesktop>
                    <h1 className="">Web design</h1>
                    <p>I can easily make your design into code within few hours.I will use HTML, CSS, JS and Bootstrap to Design Your Website</p>
                </div>
                <div className="activate md:w-2/6 p-5">
                <TbDeviceImacCode className="text-4xl text-center mx-auto mb-5"></TbDeviceImacCode>
                    <h1>Web development</h1>
                    
                    <p>I will build your website from scratch. I will use Node.JS, React JS, Python, MongoDB for your website backend.</p>
                </div>
                <div className="activate md:w-2/6 p-5">
                    <BiCodeAlt className="text-4xl text-center mx-auto mb-5"></BiCodeAlt>
                    <h1>Clean Code</h1>
                    <p>I can code your website in neat and clean that any developer can understand that.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;