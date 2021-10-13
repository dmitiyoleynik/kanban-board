import { createStyles, makeStyles } from '@mui/styles';

const useCardStyles = makeStyles(theme =>
  createStyles({
    card: {
      margin: theme.spacing(1),
      borderLeftStyle: 'solid',
      borderLeftWidth: theme.spacing(2),
      borderColor: theme.palette.primary.main,
    },
  }),
);

export default useCardStyles;
