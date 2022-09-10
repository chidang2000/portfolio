import { useRef } from 'react';
import ContactOption from './ContactOption';
import emailjs from 'emailjs-com';
function Contact() {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1y6lp5e', 'template_unn4tot', formRef.current, 't23f8gnOu1X32Sgmn');
        e.target.reset();
    };
    return (
        <section id="contact" className="contact">
            <div className="contact__header">
                <h2 className="title">Get In Touch</h2>
                <h1 className="heading">Contact Me</h1>
            </div>
            <div className="container contact__container">
                <div className="contact__options">
                    <ContactOption></ContactOption>
                </div>

                <form className="contact__form" ref={formRef} onSubmit={sendEmail}>
                    <input
                        placeholder="Your Full Name..."
                        type="text"
                        name="name"
                        required
                        className="contact__input"
                    />
                    <input placeholder="Your Email..." type="text" name="email" required className="contact__input" />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                        className="contact__textarea"
                    ></textarea>
                    <button type="submit" className="btn btn--primary contact__btn">
                        Contact Me
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
