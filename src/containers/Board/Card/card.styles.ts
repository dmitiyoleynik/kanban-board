import { grey } from 'theme/colors';

import { makeStyles } from '@mui/styles';

const useCardStyles = makeStyles(() => ({
  card: {
    backgroundColor: grey,
    maxWidth: '10rem',
    display: 'flex',
    flexDirection: 'column',
  },
  state: {
    padding: '2rem',
  },
}));

export default useCardStyles;
