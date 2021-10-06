import React, { FC, DragEvent } from 'react';
import { taskType } from 'types/task';
import Card, { ICard } from '../Card/Card';

import useBodyStyles from './body.styles';

interface IBody {
  cards: ICard[];
  type: taskType;
  dropHandler: (newState: taskType, cardId: number) => void;
}
const onDragOver = (e: any) => {
  e.preventDefault();
};

const Body: FC<IBody> = ({ cards, type, dropHandler }) => {
  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dropHandler(type, 1);
  };

  const styles = useBodyStyles();
  return (
    <div className={styles.body} onDrop={onDrop} onDragOver={onDragOver}>
      {cards.map(card => (
        <Card {...card} />
      ))}
    </div>
  );
};

export default Body;
