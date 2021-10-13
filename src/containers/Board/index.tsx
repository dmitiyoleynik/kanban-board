import { FC, useCallback, useState } from 'react';

import ColumnHeader from 'containers/ColumnHeader';

import type { taskType } from 'types/task';
import { ICard } from 'types/card';

import { taskTypes } from 'utils/constants';
import useBoardStyles from './board.styles';
import ColumnBody from '../ColumnBody';

const cardsMocked: ICard[] = [
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
];

const Board: FC = () => {
  const style = useBoardStyles();

  const [cards, setCards] = useState(cardsMocked);

  const onDrop = useCallback(
    (newState: taskType, cardId: number) => {
      setCards(cards.map(card => (cardId === card.id ? { ...card, initialState: newState } : card)));
    },
    [setCards, cards],
  );

  return (
    <div className={style.board}>
      <div className={style.board_header}>
        {taskTypes.map(name => (
          <ColumnHeader name={name} key={name} />
        ))}
      </div>
      <div className={style.board_body}>
        {taskTypes.map(type => (
          <ColumnBody type={type} dropHandler={onDrop} cards={cards.filter(card => card.initialState === type)} key={type} />
        ))}
      </div>
    </div>
  );
};

export default Board;
