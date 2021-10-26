import { RootAction } from 'store/actions';

interface IBoardState {
  columns: string[];
}

const initialState: IBoardState = {
  columns: ['To do', 'Doing', 'Done'],
};

export default function board(state = initialState, action: RootAction): IBoardState {
  switch (action) {
    default:
      return state;
  }
}
