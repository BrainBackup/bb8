import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tab, Tabs } from '@material-ui/core';

const useStyles = makeStyles({
    tabsRoot: {
    },
    tabsIndicator: {
      backgroundColor: '#3e90ff'
    },
    tabRoot: {
      'color': '#9191a9',
      'textTransform': 'initial',
      'minWidth': 72,
      'fontSize': '18px',
      '&:hover': {
        color: '#3e90ff',
        opacity: 1
      },
      '&tabSelected': {
        color: '#3e90ff'
      },
      '&:focus': {
        color: '#3e90ff'
      }
    }
  });
  interface ITabs {
    
  }
  const TabsWrapper: React.FunctionComponent<ITabs> = ({ }) => {
    const [selected, setSelected] = React.useState(0);
      const classes = useStyles();
      return (
          <Tabs
            value={selected}
            onChange={(e, value) => setSelected(value)}
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          >
            <Tab
                disableRipple
                classes={{ root: classes.tabRoot }}
                label='Login'
            />
            <Tab
                disableRipple
                classes={{ root: classes.tabRoot }}
                label='Register'
            />
        </Tabs>
      )

  };
  export default TabsWrapper;
  