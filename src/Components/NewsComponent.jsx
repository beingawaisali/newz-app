import React from 'react';
import './news-component.css';

const NewsComponent = (props) => {
    return (
        <div className="news-list img-hover-zoom" data-aos="fade" data-aos-duration="1000" style={props.giveColor}>

            <img src={props.image} className="image" alt={props.imageName}/>

            <div className="heading-main">
                <h3 className="author">{props.newsHeading}</h3>

                <p className="title">{props.title}</p>

                <p className="description">{props.description}</p>

                <a href={props.link} className="link" target="_blank">Read More...</a>
            </div>

        </div>
    );
};

export default NewsComponent;