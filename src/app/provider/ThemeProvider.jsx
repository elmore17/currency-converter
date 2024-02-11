import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#34e7e4',
            dark: '#00d8d6',
        },
        secondary: {
            main: '#d2dae2',
            dark: '#808e9b',
        },
        info: {
            main: '#00bcd4',
            dark: '#00acc1',
        },
        success: {
            main: '#4caf50',
            dark: '#388e3c',
        },
        warning: {
            main: '#ff9800',
            dark: '#f57c00',
        },
        error: {
            main: '#f44336',
            dark: '#d32f2f',
        }
    }
  });

export const AppThemeProvider = ({children}) => {
    return(
        <ThemeProvider theme={theme}>
        {children}
        </ThemeProvider>
    )
}