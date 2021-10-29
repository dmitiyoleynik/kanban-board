import { bindActionCreators } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import { useMemo } from 'react';
import { RootActionCreator } from './actions';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useActions<T extends RootActionCreator | RootActionCreator[]>(actionCreators: T, deps?: unknown[]): T {
  const dispatch = useDispatch();

  const boundActions = useMemo(
    () => {
      if (Array.isArray(actionCreators)) {
        return actionCreators.map(a => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actionCreators, dispatch);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [dispatch, ...deps] : deps,
  );

  return boundActions as unknown as T;
}
