const initialState = {
  darkTheme: false,
};

export const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME_ACTION':
      return {darkTheme: !state.darkTheme};
    default:
      return state;
  }
};
