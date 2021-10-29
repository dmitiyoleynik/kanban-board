import { FC, DragEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Stack, Typography } from '@mui/material';

import Card from 'components/Card';

import { TaskType } from 'types/task';

import { selectTasks } from 'store/selectors/task';

import { changeTaskType } from 'store/actions/task';
import { useActions } from 'store/hooks';
import useBoardColumnStyles from './columnBody.styles';

interface IBoardColumn {
  columnTasksType: TaskType;
}

const onDragOver = (e: DragEvent<HTMLDivElement>) => {
  e.preventDefault();
};

const BoardColumn: FC<IBoardColumn> = ({ columnTasksType }) => {
  const styles = useBoardColumnStyles();
  const cards = useSelector(selectTasks(columnTasksType));
  const changeTask = useActions(changeTaskType);
  const dispatch = useDispatch();

  // const onDrop = useCallback(
  //   (e: DragEvent<HTMLDivElement>) => {
  //     e.preventDefault();

  //     const id = parseInt(e.dataTransfer.getData('text/plain'), 10);
  //     console.log({ action: 'changeTask', id, columnTasksType });
  //     dispatch(changeTaskType(id, columnTasksType));
  //     // changeTask(id, columnTasksType);
  //   },
  //   [changeTask, columnTasksType],
  // );

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const id = parseInt(e.dataTransfer.getData('text/plain'), 10);
    console.log({ action: 'changeTask', id, columnTasksType });
    dispatch(changeTaskType(id, columnTasksType));
    changeTask(id, columnTasksType);
  };

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
