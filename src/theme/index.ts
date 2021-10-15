import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 8,
  borders: {
    solid: size => `${size}px solid`,
  },
});

export default theme;
