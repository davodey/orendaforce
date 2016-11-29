const YelpContainer = React.createClass({
    render: function () {
        return (
            <div className="panel content">
                <Heading/>
                <YelpList/>
                <div className="paginate margin padding">
                    <Paginate />
                </div>
                <a className="yelp-link" href="#">
                    <p className="large">More Details on </p>
                    <img className="yelp-logo" src="../../images/yelp-2c-outline.png" alt="yelp logo" />
                </a>
            </div>
        )
    }
});


const Heading = React.createClass({
    render: function () {
        return (
            <div>
                <h2 className="white">Our Reviews</h2>
                <div className="rating-block">
                    <p className="large">Based on 5 Yelp Reviews</p>
                    <div className="rating" data-rating="5">
                        <i className="star-1">★</i>
                        <i className="star-2">★</i>
                        <i className="star-3">★</i>
                        <i className="star-4">★</i>
                        <i className="star-5">★</i>
                    </div>
                </div>
            </div>
        )
    }
});


const Paginate = React.createClass({
    render: function () {
        return (
            <div>
                <a className="button primary margin-right" href="#">Previous  <span className="fa fa-yelp" aria-hidden="true"></span></a>
                <a className="button primary" href="#">Next  <span className="fa fa-yelp" aria-hidden="true"></span></a>
            </div>
        )
    }
});

const YelpList = React.createClass({
    render: function () {
        return (
            <div className="display-reviews">
                <div className="col">
                    <Review/>
                </div>
                <div className="col">
                    <Review/>
                </div>
                <div className="col">
                    <Review/>
                </div>
            </div>
        )
    }
});

const Review = React.createClass({
    render: function () {
        return (
            <div className="yelp-review">
                <div className="yelp-content">
                    <div className="profile-pic">
                        <img src="http://placehold.it/350x350" />
                    </div>
                    <div className="yelper-info">
                        <h3>John Doepengrimer</h3>
                        <h4>November 14, 2016</h4>
                    </div>
                    <div className="yelper-rating">
                        <div className="rating" data-rating="5">
                            <i className="star-1">★</i>
                            <i className="star-2">★</i>
                            <i className="star-3">★</i>
                            <i className="star-4">★</i>
                            <i className="star-5">★</i>
                        </div>
                    </div>
                </div>
                <div className="yelper-review">
                    <p className="review-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                </div>
            </div>
        )
    }
});

ReactDOM.render(<YelpContainer />, document.getElementById('yelp'));