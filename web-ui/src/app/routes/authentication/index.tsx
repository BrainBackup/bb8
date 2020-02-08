// import React from 'React';

// function Template(props: Int)
// import * as React from 'react';

// const Login: React.FunctionComponent<IPrivateRoute> = ({ component, authed, address, ...props }) => {
// const Login = () => null;
// export default Login;
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Username from './components/Username';
// import { Divider } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import CustomInput from 'app/components/CustomInput';
import TwitterButton from './components/TwitterButton';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    left: '30%',
    top: '50%',
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

export default function OutlinedCard() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <TwitterButton onClick={() => console.log('on click')}/>
          </Grid>
          <Grid item xs={6}>
            <CustomInput label='Username' onChange={(e) => console.log(e.target.value)} />
          </Grid>
        </Grid>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}