import { RootState } from 'store';
import { ICard } from 'types/card';

const selectFilteredCards =
  (title: string) =>
  (state: RootState): ICard[] =>
    state.card.cards.filter(card => card.title === title);

export { selectFilteredCards };
