import axios from 'axios';

const YELP_API_KEY = "WwRB_NK54giVMc_fDDsYeAwxz0cdd917ZAqFNOXQIQ6L-vjik6ZZBdWOchAg6A5FVSVyYhwT6azhbqAPxJntWdX1Hpt4Zxk7bieOqW854lk503Tq_HIIjkDBwB-ZX3Yx"

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  }
});
