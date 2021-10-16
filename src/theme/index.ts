import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 8,
  borders: {
    solid: (size: number, color?: string) => (color ? `${size}px solid ${color}` : `${size}px solid`),
  },
});

export default theme;
