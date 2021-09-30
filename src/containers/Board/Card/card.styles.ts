import { makeStyles } from '@mui/styles';
import { grey } from '../../../theme/colors';

const useCardStyles = makeStyles(() => ({
  card: {
    backgroundColor: grey,
    maxWidth: '10rem',
    display: 'flex',
    flexDirection: 'column',
  },
  state: {
    display: 'flex',
  },
}));

export default useCardStyles;
