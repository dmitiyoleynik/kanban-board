import { createTheme } from '@mui/material/styles';

const defaultSpaceing = 8;

const theme = createTheme({
  spacing: defaultSpaceing,
  borders: {
    solid: (size: number, color?: string) => `${size * defaultSpaceing}px solid ${color}`,
  },
});

export default theme;
