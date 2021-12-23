import { FC, useEffect } from 'react';
import { Stack } from '@mui/material';

import BoardColumn from 'containers/BoardColumn';

import { taskTypes } from 'utils/constants';

import { useActions } from 'store/hooks';
import { fetchTasks } from 'store/actions/task';

import useBoardStyles from './board.styles';

const Board: FC = () => {
  const styles = useBoardStyles();

  const uploadTasks = useActions(fetchTasks);
  useEffect(() => {
    uploadTasks();
  }, []);

  return (
    <Stack className={styles.board} direction="row" spacing={2}>
      {taskTypes.map(typeName => (
        <BoardColumn columnTasksType={typeName} key={typeName} />
      ))}
    </Stack>
  );
};

export default Board;
