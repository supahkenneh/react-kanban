import axios from 'axios';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const EDITING = 'EDITING';
export const EDIT_CARD = 'EDIT_CARD';
export const GET_USERS = 'GET_USERS';

const PATH = '/api';
const USER_PATH = '/api/user';

export const loadCards = () => {
  return dispatch => {
    return axios.get(PATH)
      .then(response => {
        // console.log(response);
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

export const getUsers = () => {
  return dispatch => {
    return axios.get(USER_PATH)
    .then(response => {
      dispatch({
        type: GET_USERS,
        users: response.data
      })
    })
  }
}

export const deleteCard = card => {
  return dispatch => {
    return axios.delete(`${PATH}/${card}`)
    .then(response => {
      dispatch({
        type: DELETE_CARD,
        cards: response.data
      })
    })
  }
}

export const editingCard = card => {
  return (dispatch) => {
    console.log('cardss', card);
    return dispatch({
      type: EDITING,
      card: card,
    })
  }
}

export const editCard = card => {
  return dispatch => {
    return axios.put(`${PATH}/${card}`)
    .then(response => {
      console.log('response', response);
      dispatch({
        type: EDIT_CARD,
        cards: card
      })
    })
  }
}