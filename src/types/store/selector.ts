import { RootState } from 'store';

export type Selector<S> = (state: RootState) => S;
