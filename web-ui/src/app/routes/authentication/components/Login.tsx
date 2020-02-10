import * as React from 'react';
import { Button } from '@material-ui/core';
import CustomInput from 'app/components/CustomInput';
import Password from 'app/components/Password';

interface ILogin {

}
interface IForm {
    username: string,
    password: string
};
const Login: React.FunctionComponent<ILogin> = ({ }) => {
    const initialState: IForm = {
        username: '',
        password: ''
    };
    const [form, setForm] = React.useState(initialState);
    return (
        <div>
            <CustomInput fullWidth={true} label='Username' onChange={(e) => setForm({ ...form, username: e.target.value })} />
            <Password onChange={(e) => setForm({ ...form, password: e.target.value })}/>
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
