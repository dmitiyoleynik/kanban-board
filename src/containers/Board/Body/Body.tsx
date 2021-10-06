import { FC, DragEvent, useCallback } from 'react';

import { ICard } from 'types/card';
import { taskType } from 'types/task';

import Card from '../Card/Card';

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
  const styles = useBodyStyles();

  const onDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      const id = parseInt(e.dataTransfer.getData('text/plain'), 10);
      dropHandler(type, id);
    },
    [dropHandler, type],
  );

  return (
    <div className={styles.body} onDrop={onDrop} onDragOver={onDragOver}>
      {cards.map(card => (
        <Card {...card} />
      ))}
    </div>
  );
};

export default Body;
