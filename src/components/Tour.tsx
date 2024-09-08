interface TourProps {
    id: number;
    src: string;
    alt: string;
    date: string;
    title: string;
    text: string;
    location: string;
    days: string;
    price: string;
}

const Tour = ({ id, src, alt, date, title, text, location, days, price }: TourProps) => {
    return (<article className="tour-card" key={ id }>
        <div className="tour-img-container">
            <img src={ src } className="tour-img" alt={ alt }/>
            <p className="tour-date">{ date }</p>
        </div>
        <div className="tour-info">
            <div className="tour-title"><h4>{ title }</h4></div>
            <p>{ text }</p>
            <div className="tour-footer">
                <p><span><i className="fas fa-map"></i>
                </span> { location }</p>
                <p>{ days }</p>
                <p>{ price }</p>
            </div>
        </div>
    </article>)
}

export default Tour;