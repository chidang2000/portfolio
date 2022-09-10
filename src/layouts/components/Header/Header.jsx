import Button from './Button';
import './Header.scss';
import MediaSocials from './MediaSocials';
import ME from '@/assets/images/cvv.png';
function Header() {
    return (
        <header className="header">
            <div className="container header__container">
                <h2>Hello I'm</h2>
                <h1>Chí Đang</h1>
                <h2 className="text-light">FrontEnd Developer</h2>
                <Button></Button>
                <MediaSocials />
                <div className="header__avatar">
                    <img src={ME} alt={ME}></img>
                </div>
            </div>
        </header>
    );
}

export default Header;
