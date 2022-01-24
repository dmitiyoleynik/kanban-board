import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';

import BoardColumn from 'containers/BoardColumn';
import SomethingWentWrong from 'containers/SomethingWentWrong';

import { taskTypes } from 'utils/constants';

import { useActions } from 'store/hooks';
import { fetchTasks } from 'store/actions/task';
import { isError } from 'store/selectors/error';

import useBoardStyles from './board.styles';

const Board: FC = () => {
  const styles = useBoardStyles();
  const showBoard = !useSelector(isError);

  const uploadTasks = useActions(fetchTasks);
  useEffect(() => {
    uploadTasks();
  }, []);

  return showBoard ? (
    <Stack className={styles.board} direction="row" spacing={2}>
      {taskTypes.map(typeName => (
        <BoardColumn columnTasksType={typeName} key={typeName} />
      ))}
    </Stack>
  ) : (
    <SomethingWentWrong />
  );
};

export default Board;
