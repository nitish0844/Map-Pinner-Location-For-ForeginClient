const initialState = {
  show: false,
  message: '',
  type: '',
};

export const ToastReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_TOAST_ACTION':
      return {
        show: true,
        message: action.data.message,
        type: action.data.type,
      };
    case 'CLOSE_TOAST_ACTION':
      return {show: false, message: '', type: ''};
    default:
      return state;
  }
};
