import * as actions from '../actionTypes';

const initialState = {
  data: [],
  postDeleted: { id: null, isDeleted: false },
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case actions.FILL_POSTS_DATA:
      return {
        ...state,
        data: Object.values({ ...action.payload.data }),
      };

    case actions.DELETE_POST_SUCCESS:
      return {
        ...state,
        data: state.data.filter((row) => row.id !== action.payload.id),
      };

    case actions.EDIT_POST_SUCCESS:
      return {
        ...state,
        data: state.data.map((row) => {
          if (row.id === action.payload.id)
            return Object.assign({}, action.payload);
          return row;
        }),
      };

    default:
      return state;
  }
};

export default session;
