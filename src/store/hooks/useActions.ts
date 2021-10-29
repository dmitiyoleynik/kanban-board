import { Action, ActionCreator, bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

const useActions = <Type>(actionCreators: ActionCreator<Type>): ActionCreator<Type> => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};

export default useActions;
