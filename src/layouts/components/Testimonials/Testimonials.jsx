import './Testimonials.scss';
import images from '@/assets/images';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
    {
        avatar: images.avatar1,
        name: 'Nhi An',
        review: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
        avatar: images.avatar2,
        name: 'Nghia Doan',
        review: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
        avatar: images.avatar3,
        name: 'Tan Ngoc',
        review: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
        avatar: images.avatar4,
        name: 'Nhat Phuong',
        review: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
];
function Testimonials() {
    return (
        <section id="testimonials" className="testimonials">
            <div className="testimonials__header">
                <h2 className="title">Review from client</h2>
                <h1 className="heading">Testimonials</h1>
            </div>

            <Swiper
                className="testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data.map((item, i) => (
                    <SwiperSlide className="testimonials__item" key={i}>
                        <div className="testimonials__avatar">
                            <img src={item.avatar} alt={item.name} />
                        </div>
                        <div className="testimonials__info">
                            <h3 className="testimonials__name">{item.name}</h3>
                            <p className="testimonials__review">{item.review}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Testimonials;
