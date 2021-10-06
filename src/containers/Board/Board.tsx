import { FC, useCallback, useState } from 'react';

import Header from 'containers/Board/Header';

import type { taskType } from 'types/task';
import { ICard } from 'types/card';

import { taskTypes } from '../../constants';
import useBoardStyles from './board.styles';
import Body from './Body';

const cardsMocked: ICard[] = [
  {
    pictureType: 'task',
    id: 1,
    description: 'task1',
    initialState: 'To do',
  },
  {
    pictureType: 'task',
    id: 2,
    description: 'task2',
    initialState: 'Done',
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
          <Header name={name} />
        ))}
      </div>
      <div className={style.board_body}>
        {taskTypes.map(type => (
          <Body type={type} dropHandler={onDrop} cards={cards.filter(card => card.initialState === type)} />
        ))}
      </div>
    </div>
  );
};

export default Board;
