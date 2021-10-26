import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Stack } from '@mui/material';

import BoardColumn from 'containers/BoardColumn';

import type { TaskType } from 'types/task';

import { taskTypes } from 'utils/constants';

import { setTaskTo } from 'store/actions/actionCreators/task';

import useBoardStyles from './board.styles';

const Board: FC = () => {
  const styles = useBoardStyles();
  const dispatch = useDispatch();

  const onDrop = (newState: TaskType, cardId: number) => dispatch(setTaskTo(cardId, newState));

  return (
    <Stack className={styles.board} direction="row" spacing={2}>
      {taskTypes.map(typeName => (
        <BoardColumn columnTasksType={typeName} dropHandler={onDrop} key={typeName} />
      ))}
    </Stack>
  );
};

export default Board;
