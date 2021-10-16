import { makeStyles } from '@mui/styles';

const useBoardColumnStyles = makeStyles(theme => ({
  body: {
    flex: 1,
  },
  columnName: {
    paddingLeft: theme.spacing(2),
  },
}));

export default useBoardColumnStyles;
