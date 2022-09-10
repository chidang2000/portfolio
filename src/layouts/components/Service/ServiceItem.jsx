import React from 'react';
import images from '@/assets/images';
import './ServiceItem.scss';

const dataServices = [
    {
        id: 1,
        image: images.port4,
        language: 'HTML, Css module, ReactJs, Router Dom V6, Hooks, Redux, Redux Toolkit ...',
        title: 'TIKTOK',
        desc: 'A cloned website of tiktok with many functions such as:Login by Email or ID Tiktok, Logout, search, FetchApi, hooks, Tippy,...',
        github: 'https://github.com/chidang2000/tiktok',
        demo: 'https://cd-tiktok.netlify.app',
    },
    {
        id: 2,
        image: images.port1,
        language: 'HTML, SCSS, ReactJS, Router Dom V6, Hooks, Redux, Redux Toolkit,..',
        title: 'E-COMMERCE',
        desc: 'An e-commerce site to sell clothing. This project has key features like: fully responsive, add to cart, auto total, checkout, filter products ...',
        github: 'https://github.com/chidang2000/E-commerce',
        demo: 'https://cd-web-shop.netlify.app',
    },
    {
        id: 3,
        image: images.port2,
        language: 'HTML, CSS, REACTJS, Hooks',
        title: 'TICTACTOE',
        desc: "A website about the game 'tic tac toe'",
        github: 'https://github.com/chidang2000/tictactoe',
        demo: 'https://cd-tictactoe-react.herokuapp.com/',
    },
    {
        id: 4,
        image: images.port3,
        language: 'HTML, Tailwind, ReactJs, Hooks',
        title: 'A website about dark mode',
        desc: 'A website can switch light and dark mode',
        github: 'https://github.com/chidang2000/dark-mode',
        demo: 'https://cd-dark-mode.netlify.app',
    },
];
const ServiceItem = () => {
    return dataServices.map((item) => (
        <div className="services__item" key={item.id}>
            <div className="services__image">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="services__content">
                <h2 className="services__title">{item.title}</h2>
                <h3 className="services__desc">{item.desc}</h3>
                <p className="services__language">{item.language}</p>
                <div className="services__actions">
                    <a className="link btn" href={item.github} target="_blank" rel="noreferrer">
                        Github
                    </a>
                    <a className="link btn btn--primary" href={item.demo} target="_blank" rel="noreferrer">
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    ));
};

export default ServiceItem;
