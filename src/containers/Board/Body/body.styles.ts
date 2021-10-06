import { makeStyles } from '@mui/styles';

const useBodyStyles = makeStyles(() => ({
  body: {
    flex: 1,
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderLeft: '1px solid',
    '&:last-child': {
      borderRight: '1px solid',
    },
  },
}));

export default useBodyStyles;
