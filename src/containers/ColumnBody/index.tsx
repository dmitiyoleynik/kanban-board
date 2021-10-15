import { FC, DragEvent, useCallback } from 'react';

import Card from 'components/Card';

import { ICard } from 'types/card';
import { TaskType } from 'types/task';

import { Paper, Stack, Typography } from '@mui/material';
import useBoardColumnStyles from './columnBody.styles';

interface IBody {
  cards: ICard[];
  type: TaskType;
  dropHandler: (newState: TaskType, cardId: number) => void;
}

const onDragOver = (e: DragEvent<HTMLDivElement>) => {
  e.preventDefault();
};

const BoardColumn: FC<IBody> = ({ cards, type, dropHandler }) => {
  const styles = useBoardColumnStyles();

  const onDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      const id = parseInt(e.dataTransfer.getData('text/plain'), 10);
      dropHandler(type, id);
    },
    [dropHandler, type],
  );

  return (
    <Paper className={styles.body} onDragOver={onDragOver} onDrop={onDrop}>
      <Typography>{type}</Typography>
      <Stack>
        {cards.map(card => (
          <Card {...card} key={card.id} />
        ))}
      </Stack>
    </Paper>
  );
};

export default BoardColumn;
