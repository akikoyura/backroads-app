import Title from "./Title.tsx";
import { tours } from "../data/data.tsx";
import Tour from "./Tour.tsx";

const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title title="featured" subTitle="tours"/>
            <div className="section-center featured-center">
                { tours.map(item => <Tour key={ item.id } { ...item } />) }
            </div>
        </section>)
}
export default Tours;