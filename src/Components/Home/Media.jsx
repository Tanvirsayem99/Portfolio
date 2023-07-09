import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Media = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex gap-5 border border-fuchsia-500 py-2 pl-4 w-60 fixed bottom-4  z-50 navBg '>
            <a className='text-4xl text-sky-500' href="https://www.facebook.com/tanvir.haider.12177"><BsFacebook></BsFacebook></a>
            <a className='text-4xl text-sky-700' href="https://twitter.com/tanvirSayem14"><AiFillTwitterCircle></AiFillTwitterCircle></a>
            <a className='text-4xl text-black' href="https://github.com/Tanvirsayem99"><AiFillGithub></AiFillGithub></a>
            <a className='text-4xl text-sky-900' href="https://www.linkedin.com/in/tanvir-haider-sayem-4a9323279/"><AiFillLinkedin></AiFillLinkedin></a>
        </div>
        </div>
    );
};

export default Media;