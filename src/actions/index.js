import { ADD_ARTICLE,STORE_MOVIES,STORE_GENRES,SET_GENRE } from "../constants/action-types";
export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
export const storeMovies = movies => ({ type: STORE_MOVIES, payload: movies });
export const storeGenres = genres => ({ type: STORE_GENRES, payload: genres });
export const setGenre = genre => ({ type: SET_GENRE, payload: genre });