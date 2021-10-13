import { FC, DragEvent, useCallback } from 'react';

import Card from 'components/Card';

import { ICard } from 'types/card';
import { TaskType } from 'types/task';

import useColumnBodyStyles from './columnBody.styles';

interface IBody {
  cards: ICard[];
  type: TaskType;
  dropHandler: (newState: TaskType, cardId: number) => void;
}

const onDragOver = (e: DragEvent<HTMLDivElement>) => {
  e.preventDefault();
};

const ColumnBody: FC<IBody> = ({ cards, type, dropHandler }) => {
  const styles = useColumnBodyStyles();

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
        <Card {...card} key={card.id} />
      ))}
    </div>
  );
};

export default ColumnBody;
