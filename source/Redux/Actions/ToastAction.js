export const toggleToastAction = data => {
  return {
    type: 'TOGGLE_TOAST_ACTION',
    data: data,
  };
};

export const closeToastAction = () => {
  return {
    type: 'CLOSE_TOAST_ACTION',
  };
};
