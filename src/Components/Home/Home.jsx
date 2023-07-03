import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Navbar from "./shared/Navbar";
import Skills from "./Skills";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Services></Services>
            <Portfolio></Portfolio>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;