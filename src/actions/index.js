export const changeAppStatus = status => {
  return {
    type: 'CHANGE',
    payload: status
  };
};