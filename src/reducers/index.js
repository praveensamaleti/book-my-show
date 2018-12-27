import { ADD_ARTICLE,STORE_MOVIES,STORE_GENRES,SET_GENRE } from "../constants/action-types";
const initialState = {
  articles: [],
  movies: [],
  genres:[],
  parameters : {
    selectedGenre : null
  }
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    case STORE_MOVIES:
      return { ...state, movies:action.payload};
    case STORE_GENRES:
      return { ...state, genres:action.payload};
    case SET_GENRE:
      return { ...state , parameters : { ...state.parameters , selectedGenre : action.payload }};
    default:
      return state;
  }
};
export default rootReducer;