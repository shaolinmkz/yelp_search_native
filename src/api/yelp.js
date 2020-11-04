import axios from 'axios';

const YELP_API_KEY = '<YOUR-API-KEY>';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  }
});
