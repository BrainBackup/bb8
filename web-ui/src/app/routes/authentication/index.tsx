import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider, Card, CardContent } from '@material-ui/core';
import TwitterButton from './components/TwitterButton';
import GithubButton from './components/GithubButton';
import FacebookButton from './components/FacebookButton';
import TabsWrapper from './components/TabsWrapper';
import { TABS } from './constants';
import Login from './components/Login';
import Register from './components/Register';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    left: '20%',
    top: '30%',
    maxWidth: 900,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
interface IAuth {

}
const Authentication: React.FunctionComponent<IAuth> = ({ }) => {
  const [activeTab, setActiveTab] = React.useState(TABS.LOGIN);
// export default function Authentication() {
  const classes = useStyles();
  const viewActiveTab = {
    [TABS.LOGIN]: <Login />,
    [TABS.REGISTER]: <Register />
  };
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container>
          <Grid item xs={5}>
            <div style={{ marginTop: 30 }}>
              <TwitterButton onClick={() => console.log('on click')}/>
              <GithubButton onClick={() => console.log('on click')}/>
              <FacebookButton onClick={() => console.log('on click')}/>

            </div>
          </Grid>
          <Grid item xs={2}>
            <Divider orientation='vertical' style={{ marginLeft: '50%' }}/>
          </Grid>
          <Grid item xs={5}>
            <TabsWrapper activeTab={activeTab} onChange={setActiveTab}/>
            { viewActiveTab[activeTab] }
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
export default Authentication;
