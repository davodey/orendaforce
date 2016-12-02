import React from "react";

const Heading = (props) => {
    return (
        <div>
            <h2 className="white">Our Reviews</h2>
            <div className="rating-block">
                <p className="large">Based on {props.count} Yelp Reviews</p>
                <div className="rating" data-rating={props.rating}>
                    <i className="star-1">★</i>
                    <i className="star-2">★</i>
                    <i className="star-3">★</i>
                    <i className="star-4">★</i>
                    <i className="star-5">★</i>
                </div>
            </div>
        </div>
    )
};

export default Heading
