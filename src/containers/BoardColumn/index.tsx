import { FC, DragEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Stack, Typography } from '@mui/material';

import Card from 'components/Card';

import { TaskType } from 'types/task';

import { selectTaskByType } from 'store/selectors/task';
import { setTaskTo } from 'store/actions/actionCreators/task';

import useBoardColumnStyles from './columnBody.styles';

interface IBoardColumn {
  columnTasksType: TaskType;
}

const onDragOver = (e: DragEvent<HTMLDivElement>) => {
  e.preventDefault();
};

const BoardColumn: FC<IBoardColumn> = ({ columnTasksType }) => {
  const styles = useBoardColumnStyles();
  const cards = useSelector(selectTaskByType(columnTasksType));
  const dispatch = useDispatch();

  const onDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      const id = parseInt(e.dataTransfer.getData('text/plain'), 10);
      dispatch(setTaskTo(id, columnTasksType));
    },
    [columnTasksType, dispatch],
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
