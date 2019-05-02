export const createHome = home => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({
      type: 'CREATE_PROJECT',
      home
    });
  };
};
