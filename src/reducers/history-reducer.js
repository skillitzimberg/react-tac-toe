export default ( state = {}, action ) => {
  switch (action.type) {
    case 'MAKE_MOVE':
      const { history, stepNumber, xIsNext } = action;
      let newState = Object.assign({}, state, {
        history: history[stepNumber - 1].squares,
      });
      return newState;
  default:
    return state;
  }
};
