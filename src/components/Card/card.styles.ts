import { green } from '@mui/material/colors';
import { createStyles, makeStyles } from '@mui/styles';

const useCardStyles = makeStyles(theme =>
  createStyles({
    card: {
      margin: theme.spacing(1),
      borderLeftStyle: 'solid',
      borderLeftWidth: theme.spacing(2),
      borderColor: theme.palette.primary.main,
    },
    cardInfo: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    assignedTo: {
      alignItems: 'center',
    },
  }),
);

export default useCardStyles;
