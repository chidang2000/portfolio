import './Service.scss';
import ServiceItem from './ServiceItem';
function Service() {
    return (
        <section id="services" className="services">
            <div className="services__header">
                <h2 className="title">What I Offer</h2>
                <h1 className="heading">Project</h1>
            </div>
            <div className="container services__container">
                <div className="services__list">
                    <ServiceItem />
                </div>
            </div>
        </section>
    );
}

export default Service;
