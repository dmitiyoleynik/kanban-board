import { createStyles, makeStyles } from '@mui/styles';

const useCardStyles = makeStyles(theme =>
  createStyles({
    card: {
      margin: theme.spacing(2),
      borderLeft: theme.borders.solid(2, theme.palette.primary.main),
    },
    assignedTo: {
      alignItems: 'center',
    },
  }),
);

export default useCardStyles;
