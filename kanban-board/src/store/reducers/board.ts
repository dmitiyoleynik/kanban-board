import { RootActions } from '../actions';

interface IBoardState{
    columns:string[]
}

const initialState:IBoardState = {
  columns: ['To do', 'Doing', 'Done'],
};

export default function board(state = initialState, action:RootActions):IBoardState {
  switch (action) {
    default:
      return state;
  }
}
