import { createMuiTheme } from "@material-ui/core";

// #212121
// #323232
// #0d7377
// #14ffec
const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#212121'
        },
        secondary: {
          light: '#323232',
          main: '#0d7377',
          contrastText: '#14ffec',
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