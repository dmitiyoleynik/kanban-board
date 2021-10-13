import { makeStyles } from '@mui/styles';

import { white } from 'theme/colors';

const useBoardStyles = makeStyles(() => ({
  board: {
    padding: '1rem',
  },
  board_header: {
    display: 'flex',
    backgroundColor: white,
  },
  board_body: {
    display: 'flex',
    backgroundColor: white,
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
