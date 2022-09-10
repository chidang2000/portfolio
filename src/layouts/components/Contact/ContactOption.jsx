import React from 'react';
import './Contact.scss';
import { CgMail } from 'react-icons/cg';
import { GoLocation } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
const data = [
    {
        icon: <CgMail></CgMail>,
        title: 'Gmail',
        name: 'chidangg1602@gmail.com',
    },
    {
        icon: <GoLocation></GoLocation>,
        title: 'Location',
        name: 'Ca Mau, Viet Nam ',
    },
    {
        icon: <BsPhone></BsPhone>,
        title: 'Phone',
        name: '0835629645',
    },
];
const ContactOpiton = () => {
    return data.map((item, i) => (
        <div className="contact__option" key={i}>
            <span className="contact__icon">{item.icon}</span>
            <h2 className="contact__title">{item.title}</h2>
            <p className="contact__name">{item.name}</p>
        </div>
    ));
};

export default ContactOpiton;
