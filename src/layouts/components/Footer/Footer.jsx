import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import './Footer.scss';
function Footer() {
    return (
        <div className="footer">
            <div className="container footer__container">
                <ul className="footer__list">
                    <li className="footer__item">
                        <a className=" footer__link text-light" href="/">
                            Home
                        </a>
                    </li>
                    <li className="footer__item">
                        <a className=" footer__link text-light" href="#about">
                            About
                        </a>
                    </li>
                    <li className="footer__item">
                        <a className=" footer__link text-light" href="#experience">
                            Experience
                        </a>
                    </li>
                    <li className="footer__item">
                        <a className=" footer__link text-light" href="#services">
                            Services
                        </a>
                    </li>
                    <li className="footer__item">
                        <a className=" footer__link text-light" href="#portfolio">
                            Portfolio
                        </a>
                    </li>

                    <li className="footer__item">
                        <a className=" footer__link text-light" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="footer__socials">
                    <a href="https://chat.zalo.me/" className="footer__icon">
                        <SiZalo></SiZalo>
                    </a>
                    <a href="https://www.facebook.com/ncd.chidang/" className="footer__icon">
                        <FaFacebookF></FaFacebookF>
                    </a>
                    <a href="https://github.com/chidang2000" className="footer__icon">
                        <FaGithub></FaGithub>
                    </a>
                </div>
                <div className="footer__author">
                    <span>Powered by Chi Dang</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
