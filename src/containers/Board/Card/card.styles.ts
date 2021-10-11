import { makeStyles } from '@mui/styles';

const useCardStyles = makeStyles(theme => ({
  card: {
    maxWidth: theme.spacing(10),
  },
  state: {
    padding: '2rem',
  },
}));

export default useCardStyles;
