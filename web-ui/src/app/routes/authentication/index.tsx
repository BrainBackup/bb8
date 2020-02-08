import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider, Card, CardContent } from '@material-ui/core';
import CustomInput from 'app/components/CustomInput';
import Password from 'app/components/Password';
import TwitterButton from './components/TwitterButton';
import GithubButton from './components/GithubButton';
import FacebookButton from './components/FacebookButton';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    left: '30%',
    top: '30%',
    minWidth: 600,
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
// export default function Authentication() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container>
          <Grid item xs={5}>
            <TwitterButton onClick={() => console.log('on click')}/>
            <GithubButton onClick={() => console.log('on click')}/>
            <FacebookButton onClick={() => console.log('on click')}/>
          </Grid>
          <Grid item xs={2}>
            <Divider orientation='vertical' style={{ marginLeft: '50%' }}/>
          </Grid>
          <Grid item xs={5}>
            <CustomInput label='Username' onChange={(e) => console.log(e.target.value)} />
            <Password onChange={(e) => console.log(e.target.value)}/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
export default Authentication;
