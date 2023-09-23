const initialState = {
  chatMessages: [],
};

export const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGES':
      return {
        chatMessages: action?.data,
      };

    // case 'REMOVE_MESSAGES':
    //   return {
    //     chatMessages: [],
    //   };

    default:
      return state;
  }
};
