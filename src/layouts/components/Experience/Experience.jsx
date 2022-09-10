import './Experience.scss';
import { BsPatchCheckFill } from 'react-icons/bs';
import { DiCss3, DiJavascript1, DiReact } from 'react-icons/di';
import { ImHtmlFive } from 'react-icons/im';
import { FaSass } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { AiOutlineConsoleSql, AiFillGithub } from 'react-icons/ai';
function Experience() {
    return (
        <section id="experience" className="experience">
            <div className="experience__header">
                <h2 className="title">What Skills I Have</h2>
                <h1 className="heading">My Skills</h1>
            </div>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h2 className="experience__title">Frontend Develoment</h2>
                    <div className="experience__skills">
                        <ul className="experience__list">
                            <li className="experience__item">
                                <div className="experience__top">
                                    <ImHtmlFive className="experience__icon" />
                                    <span className="experience__name">HTML</span>
                                </div>
                            </li>
                            <li className="experience__item">
                                <div className="experience__top">
                                    <DiCss3 className="experience__icon" />
                                    <span className="experience__name">CSS</span>
                                </div>
                            </li>
                            <li className="experience__item">
                                <div className="experience__top">
                                    <FaSass className="experience__icon" />
                                    <span className="experience__name">SCSS</span>
                                </div>
                            </li>
                            <li className="experience__item">
                                <div className="experience__top">
                                    <SiTailwindcss className="experience__icon" />
                                    <span className="experience__name">Tailwind</span>
                                </div>
                            </li>
                            <li className="experience__item">
                                <div className="experience__top">
                                    <DiJavascript1 className="experience__icon" />
                                    <span className="experience__name">JavaScript</span>
                                </div>
                            </li>

                            <li className="experience__item">
                                <div className="experience__top">
                                    <DiReact className="experience__icon" />
                                    <span className="experience__name">ReactJS</span>
                                </div>
                            </li>
                            <li className="experience__item">
                                <div className="experience__top">
                                    <AiOutlineConsoleSql className="experience__icon" />
                                    <span className="experience__name">SQL Server</span>
                                </div>
                            </li>
                            <li className="experience__item">
                                <div className="experience__top">
                                    <AiFillGithub className="experience__icon" />
                                    <span className="experience__name">GIT</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
