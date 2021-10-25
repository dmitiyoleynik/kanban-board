import { makeStyles } from '@mui/styles';

import { grey } from 'theme/colors';

const useAppStyles = makeStyles(() => ({
  '@global': {
    html: {
      height: '100%',
    },
    body: {
      height: '100%',
      margin: 0,
    },
    '#root': {
      height: '100%',
    },
  },
  app: {
    display: 'flex',
    backgroundColor: grey,
    height: '100%',
  },
}));

export default useAppStyles;
