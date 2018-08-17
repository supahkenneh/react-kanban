import { GET_USERS } from '../actions';

const initialState = [
  {id: 1, first_name: 'nobody', last_name: 'nobody'}
];

const usersList = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return [ ...action.users ]
    default:
    return state;
  }
}

export default usersList;