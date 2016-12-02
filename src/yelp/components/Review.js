import React from "react";

const YelpList = (props) => {
    let image;

    if (props.picture === null)
        image = "../../images/no-profile-pic.png";
     else
        image =  props.picture;

    return (
        <div className="yelp-review">
            <div className="yelp-content">
                <div className="profile-pic">
                    <img src={image} alt="profile pic"/>
                </div>
                <div className="yelper-info">
                    <h3>{props.username}</h3>
                    <h4>{props.date}</h4>
                </div>
                <div className="yelper-rating">
                    <div className="rating" data-rating={props.rating}>
                        <i className="star-1">★</i>
                        <i className="star-2">★</i>
                        <i className="star-3">★</i>
                        <i className="star-4">★</i>
                        <i className="star-5">★</i>
                    </div>
                </div>
            </div>
            <div className="yelper-review">
                <p className="review-text">{props.text} <a href={props.url} target="_blank">Continue on Yelp</a></p>
            </div>
        </div>
    )
};

export default YelpList
