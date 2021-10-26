import { FC, DragEvent, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Paper, Stack, Typography } from '@mui/material';

import Card from 'components/Card';

import { TaskType } from 'types/task';

import { selectTaskByType } from 'store/selectors/task';

import useBoardColumnStyles from './columnBody.styles';

interface IBoardColumn {
  columnTasksType: TaskType;
  dropHandler: (newState: TaskType, cardId: number) => void;
}

const onDragOver = (e: DragEvent<HTMLDivElement>) => {
  e.preventDefault();
};

const BoardColumn: FC<IBoardColumn> = ({ columnTasksType, dropHandler }) => {
  const styles = useBoardColumnStyles();
  const cards = useSelector(selectTaskByType(columnTasksType));

  const onDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      const id = parseInt(e.dataTransfer.getData('text/plain'), 10);
      dropHandler(columnTasksType, id);
    },
    [dropHandler, columnTasksType],
  );

  return (
    <Paper className={styles.body} onDragOver={onDragOver} onDrop={onDrop}>
      <Typography className={styles.columnName}>{columnTasksType}</Typography>
      <Stack>
        {cards.map(card => (
          <Card id={card.id} title={card.title} assignedTo={card.assignedTo} type={card.type} tags={card.tags} key={card.id} />
        ))}
      </Stack>
    </Paper>
  );
};

export default BoardColumn;
