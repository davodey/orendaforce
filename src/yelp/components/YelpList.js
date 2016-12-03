import React from "react";
import Review from './Review';

const YelpList = (props) => {
    const data = props.reviews;
    const review = data.map(function(value){
            return (
                <div className="col">
                    <Review
                        rating={value.rating}
                        text={value.text}
                        url={value.url}
                        date={value.time_created}
                        username={value.user.name}
                        picture={value.user.image_url}
                    />
                </div>
            )


    });

    return (
        <div className="display-reviews">
            {review}
        </div>
    )
};

export default YelpList
