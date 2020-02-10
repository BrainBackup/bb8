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
  // TODO: enable this and fix the Dispatch error
  // interface ITabs {
  //   onChange: Dispatch<React.SetStateAction<number>>,
  //   activeTab: number
  // }
  // const TabsWrapper: React.FunctionComponent<ITabs> = ({ }) => {
    // https://github.com/reduxjs/redux-thunk/issues/242
  const TabsWrapper = ({ onChange, activeTab }) => {
      const classes = useStyles();
      return (
          <Tabs
            value={activeTab}
            onChange={(e, value) => onChange(value)}
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
  