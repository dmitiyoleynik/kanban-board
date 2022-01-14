import { makeStyles } from '@mui/styles';
import { white } from 'theme/colors';

const useSomethingWentWrongStyles = makeStyles(theme => ({
  centeredBlock: {
    margin: 'auto',
    backgroundColor: white,
    padding: theme.spacing(2),
  },
}));

export default useSomethingWentWrongStyles;
