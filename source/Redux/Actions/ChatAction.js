export const addMessagesAction = data => {
  return {
    type: 'ADD_MESSAGES',
    data: data,
  };
};

export const removeMessagesAction = () => {
  return {
    type: 'REMOVE_MESSAGES',
  };
};
