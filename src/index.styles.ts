import { makeStyles } from '@mui/styles';

const useGlobalStyles = makeStyles(() => ({
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
}));

export default useGlobalStyles;
