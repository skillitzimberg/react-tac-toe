export default ( state = {}, action ) => {
  switch (action.type) {
    case 'MAKE_MOVE':
      const { history, stepNumber, xIsNext, i, squares, mark } = action;

      squares[i] = mark;

      let newState = Object.assign({}, state, {
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !xIsNext,
      });
      console.log('history-reducer', newState);
      return newState;
  default:
    return state;
  }
};
