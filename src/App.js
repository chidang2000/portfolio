import About from './layouts/components/About';
import Contact from './layouts/components/Contact';
import Experience from './layouts/components/Experience';
import Footer from './layouts/components/Footer';
import Header from './layouts/components/Header';
import Nav from './layouts/components/Nav';
import Service from './layouts/components/Service';
// import Testimonials from './layouts/components/Testimonials';

function App() {
    return (
        <div>
            <Header></Header>
            <Nav />
            <About />
            <Experience />
            <Service />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
