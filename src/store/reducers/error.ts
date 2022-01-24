import { ErrorAction } from 'store/actions/error';
import { SET_ERROR } from 'store/actionTypes';

export interface IErrorState {
  isError: boolean;
  error: any;
}

const initialState: IErrorState = {
  isError: false,
  error: null,
};

export default function errors(state: IErrorState = initialState, action: ErrorAction): IErrorState {
  switch (action.type) {
    case SET_ERROR:
      return { isError: true, error: action.payload };
    default:
      return state;
  }
}
