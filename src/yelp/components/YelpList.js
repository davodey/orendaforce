import React from "react";
import Review from './Review';
import dateFormat from 'dateformat';

const YelpList = (props) => {
    console.log(props);
    const data = props.reviews;
    const review = data.map(function(value){
        const now = value.time_created;
        const newDate = dateFormat(now, "mmmm dS, yyyy");
            return (
                <div className="col">
                    <Review
                        rating={value.rating}
                        text={value.text}
                        url={value.url}
                        date={newDate}
                        username={value.user.name}
                        picture={value.user.image_url}
                    />
                </div>
            )

    });

    return (
        <div className="display-reviews">
            { review }
        </div>
    )
};

export default YelpList
