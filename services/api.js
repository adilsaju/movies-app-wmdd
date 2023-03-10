import axios from 'axios';
import {
    QuestionIcon
} from 'native-base';
import {
    API_URL,
    API_KEY,
    IMAGE_URL
} from './api_config';
import qs from 'qs';

const url = API_URL;
const key = API_KEY;

export const getMovies = async (filter) => {
    try {
        const params = {
            api_key: key
        }

        const movies = axios.create({
            paramsSerializer: params => qs.stringify(params, {
                arrayFormat: 'repeat'
            })
        })
        console.log('PARAMETERS: ', params);
        console.log('FILTER: ', filter);
        const response = await movies.get(`${url}/movie/${filter}`, {
            params
        });
        console.log('RESPONSE:', response.data.results);
        const moviesData = response.data.results;
        return moviesData;

    } catch (error) {
        throw error;
    }
}

export const getMovie = async (id) => {
    try {
        const params = {
            api_key: key
        }

        const movie = axios.create({
            paramsSerializer: params => qs.stringify(params, {
                arrayFormat: 'repeat'
            })
        })
        console.log('PARAMETERS: ', params);
        console.log('ID: ', id);
        const response = await movie.get(`${url}/movie/${id}`, {
            params
        });
        console.log('RESPONSE:', response.data);
        const movieData = response.data;
        return movieData;

    } catch (error) {
        throw error;
    }
}

export const searchQuery = async (searchString, filter) => {
    try {
        const params = {
            api_key: key,
            query: searchString
        }

        const search = axios.create({
            paramsSerializer: params => qs.stringify(params, {
                arrayFormat: 'repeat'
            })
        });
        const response = await search.get(`${url}/search/${filter}/`, {
            params
        });
        console.log('PARAMS: ', params);
        console.log('FILTER: ', filter);
        console.log('RESPONSE:', response.data.results);
        const searchData = response.data.results;
        return searchData;

    } catch (error) {
        throw error;
    }
}

export const getTvShows = async (filter) => {
    try {
        const params = {
            api_key: key
        }

        const tvShows = axios.create({
            paramsSerializer: params => qs.stringify(params, {
                arrayFormat: 'repeat'
            })
        })
        console.log('PARAMETERS: ', params);
        console.log('FILTER: ', filter);
        const response = await tvShows.get(`${url}/tv/${filter}`, {
            params
        });
        console.log('RESPONSE:', response.data.results);
        const tvShowsData = response.data.results;
        return tvShowsData;

    } catch (error) {
        throw error;
    }
}