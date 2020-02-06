import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#182952'
        },
        secondary: {
          light: '#0066ff',
          main: '#2b3595',
          contrastText: '#ffcc00',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2
    },
    typography: {
       
    },
    overrides: {
      // MuiListItemIcon: {
      //   root: {
      //     color: 'white'
      //   }
      // },
      // MuiDivider: {
      //   root: {
      //     backgroundColor: 'white'
      //   }
      // }
    }
});
export default theme;
// 7045af
// e14594