import CV from '@/assets/images/cv.pdf';
function Button() {
    return (
        <div className="header__button">
            <a className="link btn" href={CV} download>
                Download CV
            </a>
            <a className="link btn btn--primary" href="#contact">
                Contact Me !
            </a>
        </div>
    );
}

export default Button;
