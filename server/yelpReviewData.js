const yelp = require('yelp-fusion');

function yelpReviewData(cb) {
    const client_id = 'pKljBz3SKdWcFpRfkEP3sQ';
    const client_token = 'PKlLAoUVtB5XIEcwwi2rxPfW5AnVAKaVlTwjmwuhVnLFx39qhFkjZc3oHPHyFr7y';
    const token = yelp.accessToken(client_id, client_token).then(response => {
        const client = yelp.client(response.jsonBody.access_token);
        client.reviews('orenda-force-cave-creek').then(response => {
            cb(response.jsonBody.reviews);
        }).catch(e => {
            console.log(e);
        });
    }).catch(e => {
        console.log(e);
    })
}

module.exports = yelpReviewData;
