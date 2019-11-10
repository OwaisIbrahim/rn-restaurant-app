import axios from 'axios';
import YelpCredentials from '../../env';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: YelpCredentials.ApiKey
    }
});