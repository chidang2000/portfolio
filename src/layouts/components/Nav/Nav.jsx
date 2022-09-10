import './Nav.scss';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { SiMinetest } from 'react-icons/si';
import { useState } from 'react';
function Nav() {
    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav className="nav">
            <a href="#" onClick={() => setActiveNav('#')} className={`link ${activeNav === '#' ? 'active' : ' '}`}>
                <AiOutlineHome />
            </a>

            <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={`link ${activeNav === '#about' ? 'active' : ' '}`}
            >
                <AiOutlineUser />
            </a>

            <a
                href="#experience"
                onClick={() => setActiveNav('#experience')}
                className={`link ${activeNav === '#experience' ? 'active' : ''}`}
            >
                <BiBook />
            </a>

            <a
                href="#services"
                onClick={() => setActiveNav('#services')}
                className={`link ${activeNav === '#services' ? 'active' : ''}`}
            >
                <RiServiceLine />
            </a>
            {/* <a
                href="#testimonials"
                onClick={() => setActiveNav('#testimonials')}
                className={`link ${activeNav === '#testimonials' ? 'active' : ''}`}
            >
                <SiMinetest />
            </a> */}

            <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={`link ${activeNav === '#contact' ? 'active' : ''}`}
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
}

export default Nav;
