import { createTheme } from '@mui/material';

export const BASE_COLOR = '#FFFBED';
export const MAIN_COLOR = '#9CBB1C';
export const ACCENT_COLOR = '#EF7D3C';
export const TEXT_COLOR = '#333';
export const WHITE_COLOR = '#fff';
export const ERROR_COLOR = 'd32f2f';

export const theme = createTheme({
  typography: {
    fontFamily: ['Zen Maru Gothic', 'sans-serif'].join(','),
    fontSize: 16,
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    background: {
      default: BASE_COLOR,
    },
    text: {
      primary: TEXT_COLOR,
    },
    primary: { main: MAIN_COLOR, contrastText: BASE_COLOR },
    secondary: { main: ACCENT_COLOR, contrastText: BASE_COLOR },
  },
});
