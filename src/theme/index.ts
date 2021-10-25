import { createTheme } from '@mui/material/styles';

const defaultSpacing = 8;

const theme = createTheme({
  spacing: defaultSpacing,
  borders: {
    solid: (size: number, color?: string) => `${size * defaultSpacing}px solid ${color}`,
  },
});

export default theme;
