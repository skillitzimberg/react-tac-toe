import historyReducer from './../../src/reducers/history-reducer';

describe("historyReducer", () => {

  let action;
  const testMove = {
    history: [{
      squares: ['X', null, null, null, null, null, null, null, null]
    }],
    stepNumber: 1,
    xIsNext: false,
  }

  test('historyReducer should return default state if no action is recognized.', () => {
    expect(historyReducer({}, { type: null })).toEqual({});
  })

  test('handleClick() in should add correct mark', () => {
    const { history, stepNumber, xIsNext } = testMove;
    action = {
      type: 'MAKE_MOVE',
      history: history,
      stepNumber: stepNumber,
      xIsNext: xIsNext,
    };
    expect(historyReducer({}, action)).toEqual({
      history: history[stepNumber - 1].squares,
    })
  })


})
