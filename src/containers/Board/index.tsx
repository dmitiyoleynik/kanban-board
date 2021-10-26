import { FC } from 'react';
import { Stack } from '@mui/material';

import BoardColumn from 'containers/BoardColumn';

import { taskTypes } from 'utils/constants';

import useBoardStyles from './board.styles';

const Board: FC = () => {
  const styles = useBoardStyles();

  return (
    <Stack className={styles.board} direction="row" spacing={2}>
      {taskTypes.map(typeName => (
        <BoardColumn columnTasksType={typeName} key={typeName} />
      ))}
    </Stack>
  );
};

export default Board;
