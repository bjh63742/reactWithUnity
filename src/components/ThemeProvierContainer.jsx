import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';

const theme = createTheme({
  typography: {
    fontFamily: 'NotoSansKR',
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        // disableTouchRipple: true,
      },
    },
  },
  breakpoints: {
    values: {
      desktop: 1090,
    },
  },
});

export default function ThemeProvierContainer({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

ThemeProvierContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
