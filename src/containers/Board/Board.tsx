import React, { FC } from 'react';

import Header from 'containers/Board/Header';

import type { taskType } from 'types/task';
import { taskTypes } from '../../constants';
import useBoardStyles from './board.styles';
import Body from './Body';

interface ICard {
  type: 'task' | 'bug';
  id: number;
  description: string;
  initialState: taskType;
}

const cards: ICard[] = [
  {
    type: 'task',
    id: 1,
    description: 'task1',
    initialState: 'To do',
  },
];

const Board: FC = () => {
  const style = useBoardStyles();
  const onDrop: React.DragEventHandler<HTMLDivElement> = () => {
    console.log('Dropped');
  };

  return (
    <div className={style.board}>
      <div className={style.board_header}>
        {taskTypes.map(name => (
          <Header name={name} />
        ))}
      </div>
      <div className={style.board_body}>
        {taskTypes.map(type => (
          <Body type={type} onDrop={onDrop} cards={cards.filter(card => card.initialState === type)} />
        ))}
      </div>
    </div>
  );
};

export default Board;
