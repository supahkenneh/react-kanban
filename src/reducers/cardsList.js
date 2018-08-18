import { LOAD_CARDS, ADD_CARD, DELETE_CARD, EDIT_CARD } from '../actions';

const initialState = [];

const cardsList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return [...action.cards]
    case ADD_CARD:
      return [...state, action.cards]
    case DELETE_CARD:
      return [...action.cards]
    case EDIT_CARD:
      let newState = null;
      state.map(card => {
        if (card.id === Number(action.cards.id)) {
          newState = state.slice(0, state.indexOf(card))
          newState.push(action.cards)
        }
      })
      return [...newState]
    default:
      return state;
  }
}

export default cardsList;