import { FC, DragEvent, useCallback } from 'react';
import { Paper, Stack, Typography } from '@mui/material';

import Card from 'components/Card';

import { TaskType } from 'types/task';

import { selectTasks } from 'store/selectors/task';
import { changeTaskType } from 'store/actions/task';
import { useActions, useAppSelector } from 'store/hooks';

import useBoardColumnStyles from './columnBody.styles';

interface IBoardColumn {
  columnTasksType: TaskType;
}

const onDragOver = (e: DragEvent<HTMLDivElement>) => {
  e.preventDefault();
};

const BoardColumn: FC<IBoardColumn> = ({ columnTasksType }) => {
  const styles = useBoardColumnStyles();
  const tasksSelector = selectTasks(columnTasksType);
  const cards = useAppSelector(tasksSelector);
  const changeTask = useActions(changeTaskType);

  const onDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      const id = parseInt(e.dataTransfer.getData('text/plain'), 10);
      changeTask({ id, newType: columnTasksType });
    },
    [changeTask, columnTasksType],
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
