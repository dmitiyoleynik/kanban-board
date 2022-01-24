import { RootState } from 'store';
import { Selector } from 'types/store/selector';

const isError: Selector<boolean> = (state: RootState) => state.errors.isError;

export { isError };
