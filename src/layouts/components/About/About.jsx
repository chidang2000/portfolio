import AboutMe from '@/assets/images/about.jpg';
import { MdCastForEducation } from 'react-icons/md';
import './About.scss';
function About() {
    return (
        <section id="about" className="about">
            <div className="about__header">
                <h3 className="about__heading">Get to know</h3>
                <h1 className="about__desc">About Me !</h1>
            </div>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__image">
                        <img src={AboutMe} alt="Chi Dang"></img>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <div className="about__card">
                            <MdCastForEducation className="about__icon"></MdCastForEducation>
                            <h3 className="about__title">University</h3>
                            <p className="about__time">2018-2022</p>
                            <span className="about__introduce">Information Technology - South Can Tho University</span>
                        </div>
                        <div className="about__card">
                            <MdCastForEducation className="about__icon"></MdCastForEducation>
                            <h3 className="about__title">HTML, CSS, JavaScript, ReactJS</h3>
                            <p className="about__time">6/2021 - Now</p>
                            <span className="about__introduce">F8-Fullstack.edu.vn</span>
                        </div>
                    </div>
                    <p className="about__text">
                        My name is Dang Nguyen. I started learning how to code website in June 2021 and spent most of my
                        day experimenting with HTML, CSS and JavaScript, React. I enjoy coding and the challenge of
                        learning something new everyday. My goal is to pursue a career in the field of front-end
                        development.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
