import Title from "./Title.tsx";
import { services } from "../data/data.tsx";
import Service from "./Service.tsx";

const Services = () => {
    return (<section className="section services" id="services">
        <Title title="our" subTitle="services"/>
        <div className="section-center services-center">
            { services.map((service) => {
                return <Service key={ service.id } { ...service } />
            }) }
        </div>
    </section>)
}

export default Services;

