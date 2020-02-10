import * as React from 'react';
import { Button, Typography } from '@material-ui/core';
import CustomInput from 'app/components/CustomInput';
import Password from 'app/components/Password';

interface ILogin {

}
const Login: React.FunctionComponent<ILogin> = ({ }) => {
    return (
        <div>
            <CustomInput fullWidth={true} label='Username' onChange={(e) => console.log(e.target.value)} />
            <Password onChange={(e) => console.log(e.target.value)}/>
            <Button
                variant="contained"
                style={{ backgroundColor: '#182952', color: 'white', textTransform: 'none', margin: '5%' }}
                fullWidth>
                Login
            </Button>
        </div>
    )
};
export default Login;
