import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Heading from './yelp/components/Heading'
import YelpList from './yelp/components/YelpList';

import './main/assets/css/style.css';
import './main/assets/css/pattern-scaffolding.css';
import './main/assets/css/iCheck.1.0.2/all.css';
import 'whatwg-fetch';

class YelpContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            business: []
        }

    }

    componentDidMount() {
        fetch("http://www.orendaforce.com/api")
            .then( (response) => {
                return response.json() })
            .then( (json) => {
                this.setState({reviews: json});
            });

        fetch("http://www.orendaforce.com/api/biz")
            .then( (response) => {
                return response.json() })
            .then( (json) => {
                this.setState({business: json});
            });
    };

    render () {
        return (
            <div className="panel content">
                <Heading
                    rating={this.state.business.rating}
                    count={this.state.business.review_count}
                />
                <YelpList
                    reviews={this.state.reviews}
                />
                <a className="yelp-link" href="https://www.yelp.com/biz/orenda-force-cave-creek" target="_blank">
                    <p className="large">More Details on </p>
                    <img className="yelp-logo" src="../../images/yelp-2c-outline.png" alt="yelp logo" role="presentation"/>
                </a>
            </div>
        )
    }

}

ReactDOM.render( <YelpContainer />, document.getElementById('yelp') );
