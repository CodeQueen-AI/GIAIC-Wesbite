import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Courses from './components/courses';
import Footer from './components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/> 
            <Main/>
            <About/>
            <Courses />
            <Footer /> 
        </div>
    );
};

export default Home;
