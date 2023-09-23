const initialState = {
  userData: {},
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_USER_DATA':
      return {...state, userData: action.data};
    case 'UPDATE_USER_DATA':
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.data,
        },
      };

    case 'LOG_OUT':
      return {
        ...state,
        userData: {},
      };
    default:
      return state;
  }
};
