import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
function MediaSocials() {
    return (
        <div className="header__socials">
            <a href="https://chat.zalo.me/" target="_blank">
                <SiZalo></SiZalo>
            </a>
            <a href="https://www.facebook.com/ncd.chidang/" target="_blank">
                <FaFacebookF></FaFacebookF>
            </a>
            <a href="https://github.com/chidang2000" target="_blank">
                <FaGithub></FaGithub>
            </a>
        </div>
    );
}

export default MediaSocials;
