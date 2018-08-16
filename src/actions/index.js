import axios from 'axios';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';

const PATH = '/api'

export const loadCards = () => {
  return dispatch => {
    return axios.get(PATH)
      .then(response => {
        dispatch({
          type: LOAD_CARDS,
          cards: response.data
        })
      })
  };
}

export const addCard = card => {
  return dispatch => {
    return axios.post(PATH, card)
    .then(response => {
      dispatch({
        type: ADD_CARD,
        cards: response.data
      })
    })
  }
}
