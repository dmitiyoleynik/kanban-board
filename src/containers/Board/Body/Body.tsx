import React, { FC } from 'react';
import { taskType } from 'types/task';
import Card, { ICard } from '../Card/Card';

import useBodyStyles from './body.styles';

interface IBody {
  cards: ICard[];
  type: taskType;
  onDrop: React.DragEventHandler<HTMLDivElement>;
}

const Body: FC<IBody> = ({ cards, onDrop }) => {
  const styles = useBodyStyles();
  return (
    <div className={styles.body} onDrop={onDrop}>
      {cards.map(card => (
        <Card {...card} />
      ))}
    </div>
  );
};

export default Body;
