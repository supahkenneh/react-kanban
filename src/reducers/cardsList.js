import { LOAD_CARDS, ADD_CARD, DELETE_CARD, EDIT_CARD, EDITING } from '../actions';

const initialState = [];

const cardsList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return [...action.cards]
    case ADD_CARD:
      return [...state, action.cards]
    case DELETE_CARD:
      return [...action.cards]
    case EDITING:
      state.map(card => {
        if (card.id === action.card) {
          if (card.editing === false ) { 
            card.editing = true;
          } else {
            card.editing = false;
          }
          console.log('card', card);
          return card
        }
      });
    // console.log('state', state);
    // console.log('action', action);
    // case EDIT_CARD:
    // return [...state, ...action.cards]
    default:
      return state;
  }
}

export default cardsList;