import axios from "axios";

// Constants
import { tmdbAPiKey } from "../constants/secrets";

// Endpoints
const apiBaseUrl: string = "https://api.themoviedb.org/3/movie";

const nowPlayingMoviesEndpoint: string = `${apiBaseUrl}/now_playing?api_key=${tmdbAPiKey}`;
const popularMoviesEndpoint: string = `${apiBaseUrl}/popular?api_key=${tmdbAPiKey}`;
const upcomingMoviesEndpoint: string = `${apiBaseUrl}/top_rated?api_key=${tmdbAPiKey}`;
const topRatedMoviesEndpoint: string = `${apiBaseUrl}/upcoming?api_key=${tmdbAPiKey}`;

// Images endpoints
export const image500 = (path: string) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = (path: string) =>
  path ? `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 = (path: string) =>
  path ? `https://image.tmdb.org/t/p/w185${path}` : null;

// API calls
const apiCall = async (endpoint: string, params?: object) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params || {},
  };

  try {
    const res = await axios.request(options);
    return res.data;
  } catch (err) {
    console.log("Some issue while hitting api call - ", err);
    return {};
  }
};

export const fetchNowPlayingMovies = () => {
  return apiCall(nowPlayingMoviesEndpoint);
};
export const fetchPopularMovies = () => {
  return apiCall(popularMoviesEndpoint);
};
export const fetchUpcomingMovies = () => {
  return apiCall(upcomingMoviesEndpoint);
};
export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndpoint);
};
