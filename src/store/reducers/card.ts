import ICardAction from 'store/actions/card';
import { ICard } from 'types/card';

interface ICardState {
  cards: ICard[];
}

const initialState: ICardState = {
  cards: [
    {
      id: 1,
      title: 'Todo task',
      initialState: 'To do',
      assignedTo: 'Dmytro Oliinyk',
      tags: ['bug', 'fixit'],
    },
    {
      id: 2,
      title: 'Done task',
      initialState: 'Done',
      assignedTo: 'Dmytro Oliinyk',
      tags: ['andry chirt'],
    },
  ],
};

export default function card(state: ICardState = initialState, action: ICardAction): ICardState {
  switch (action.type) {
    default:
      return state;
  }
}
