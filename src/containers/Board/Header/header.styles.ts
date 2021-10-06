import { makeStyles } from '@mui/styles';

const useHeaderStyles = makeStyles(() => ({
  header: {
    flex: 1,
    borderTop: '1px solid',
    borderLeft: '1px solid',
    textAlign: 'center',
    padding: '1rem 3rem',
    '&:last-child': {
      borderRight: '1px solid',
    },
  },
}));

export default useHeaderStyles;
