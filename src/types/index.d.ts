import { Theme } from '@mui/material';

declare module '@mui/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

declare module '@mui/material/styles' {
  interface Theme {
    borders: {
      solid: (size: number, color?: string) => string;
    };
  }
  interface ThemeOptions {
    borders: {
      solid: (size: number, color?: string) => string;
    };
  }
}
