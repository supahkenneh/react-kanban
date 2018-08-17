import { LOAD_CARDS, ADD_CARD } from '../actions';

const initialState = [
  { title: 'foo', body: 'bar', priority_id: 2, status_id: 2, created_by: 2, assigned_to: 3 }
];

const cardsList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return [...action.cards]
    case ADD_CARD:
      return [...state, action.cards]
    default:
      return state;
  }
}

export default cardsList;