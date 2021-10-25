import { DefaultTheme, makeStyles } from '@mui/styles';

const useTagStyles = makeStyles<DefaultTheme, { color: string }>(theme => ({
  tag: {
    backgroundColor: ({ color }) => color,
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
  },
}));

export default useTagStyles;
