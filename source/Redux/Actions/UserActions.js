export const storeUserDataAction = data => {
  return {
    type: 'STORE_USER_DATA',
    data: data,
  };
};

export const updateUserDataAction = data => {
  return {
    type: 'UPDATE_USER_DATA',
    data: data,
  };
};

export const logoutUserAction = () => {
  return {
    type: 'LOG_OUT',
  };
};
