export default ( state = {}, action ) => {
  switch (action.type) {
    case 'MAKE_MOVE':
      const { history, stepNumber, xIsNext, i, mark } = action;
      const current = history[history.length - 1];
      const squares = current.squares.slice();

      squares[i] = mark;

      let newState = Object.assign({}, state, {
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: stepNumber + 1,
        xIsNext: !xIsNext,
      });
      console.log('history-reducer', newState);
      return newState;
  default:
    return state;
  }
};
