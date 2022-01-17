import { FC } from 'react';

import { Button, Stack, Typography } from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

import useSomethingWentWrongStyles from './somethingWentWrong.styles';

const reloadPage = () => {
  window.location.reload();
};

const SomethingWentWrong: FC = () => {
  const styles = useSomethingWentWrongStyles();

  return (
    <div className={styles.centeredBlock}>
      <Stack spacing={2} className={styles.foo}>
        <ErrorOutlineOutlinedIcon sx={{ fontSize: 100 }} />
        <Typography variant="h4">Whoops!</Typography>
        <Typography variant="subtitle1">Looks like something went wrong. Try to refresh the page.</Typography>
        <Button onClick={reloadPage}>Refresh</Button>
      </Stack>
    </div>
  );
};

export default SomethingWentWrong;
