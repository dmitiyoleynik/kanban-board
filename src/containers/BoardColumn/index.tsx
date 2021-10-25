import { FC, DragEvent, useCallback } from 'react';

import { Paper, Stack, Typography } from '@mui/material';

import Card from 'components/Card';

import { ICard } from 'types/card';
import { TaskType } from 'types/task';

import useBoardColumnStyles from './columnBody.styles';

interface IBoardColumn {
  cards: ICard[];
  columnName: TaskType;
  dropHandler: (newState: TaskType, cardId: number) => void;
}

const onDragOver = (e: DragEvent<HTMLDivElement>) => {
  e.preventDefault();
};

const BoardColumn: FC<IBoardColumn> = ({ cards, columnName, dropHandler }) => {
  const styles = useBoardColumnStyles();

  const onDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      const id = parseInt(e.dataTransfer.getData('text/plain'), 10);
      dropHandler(columnName, id);
    },
    [dropHandler, columnName],
  );

  return (
    <Paper className={styles.body} onDragOver={onDragOver} onDrop={onDrop}>
      <Typography className={styles.columnName}>{columnName}</Typography>
      <Stack>
        {cards.map(card => (
          <Card id={card.id} title={card.title} assignedTo={card.assignedTo} initialState={card.initialState} tags={card.tags} key={card.id} />
        ))}
      </Stack>
    </Paper>
  );
};

export default BoardColumn;
