import { createTheme } from "@mui/material/styles";

const telcoTheme = createTheme({
    palette: {
        primary: {
            main: '#014db5',
        },
        secondary: {
            main: '#cccccc',
        },
    },
    typography: {
        fontFamily: '"IBM Plex Sans", "sans-serif"',
        fontWeightMedium: 400,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                a: {
                    color: '#014db5',
                    textDecoration: 'none',
                },
                code: {
                    fontFamily: '"IBM Plex Mono", monospace',
                },
            },
        },
    },
});

export default telcoTheme;
