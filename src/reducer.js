// this is what data layer initially looks like
export const initialState = {
  user: null,
};

// actions- dispatch actions into the datalayer 
export const actionTypes = {
  SET_USER: "SET_USER",
};

// inside the reducer we listen to the actions
// if we just recieved an action for eg the SET_USER action 
// then what we wanna do is return what the new data layer will look like
// return what it currently looks like but change the user whatever we passed in 
// if we dont listen to action go to default

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
