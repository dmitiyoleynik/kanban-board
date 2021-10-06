import { makeStyles } from '@mui/styles';

const useBoardStyles = makeStyles(() => ({
  board: {
    padding: '1rem',
  },
  board_header: {
    display: 'flex',
    backgroundColor: '#fff',
  },
  board_body: {
    display: 'flex',
    backgroundColor: '#fff',
  },
  header_element: {
    flex: 1,
    borderTop: '1px solid',
    borderLeft: '1px solid',
    textAlign: 'center',
    padding: '1rem 3rem',
    '&:last-child': {
      borderRight: '1px solid',
    },
  },
  body_element: {
    flex: 1,
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderLeft: '1px solid',
    '&:last-child': {
      borderRight: '1px solid',
    },
  },
}));

export default useBoardStyles;
