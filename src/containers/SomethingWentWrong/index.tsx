import { Button, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import useSomethingWentWrongStyles from './somethingWentWrong.styles';

const SomethingWentWrong: FC = () => {
  const styles = useSomethingWentWrongStyles();

  return (
    <div className={styles.centeredBlock}>
      <Stack spacing={2} alignItems="center">
        <ErrorOutlineOutlinedIcon sx={{ fontSize: 100 }} />
        <Typography variant="h4">Whoops!</Typography>
        <Typography variant="subtitle1">Looks like something went wrong. Would you like to try again?</Typography>
        <Button>TRY AGAIN</Button>
      </Stack>
    </div>
  );
};

export default SomethingWentWrong;
