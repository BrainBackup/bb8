import * as React from 'react';
import { Button } from '@material-ui/core';
import CustomInput from 'app/components/CustomInput';
import Password from 'app/components/Password';

interface ILogin {

}
interface IForm {
    mailAddress: string,
    password: string
};
const Login: React.FunctionComponent<ILogin> = ({ }) => {
    const initialState: IForm = {
        mailAddress: '',
        password: ''
    };
    const [form, setForm] = React.useState(initialState);
    return (
        <div>
            <CustomInput fullWidth={true} label='Mail Address' onChange={(e) => setForm({ ...form, mailAddress: e.target.value })} />
            <Password onChange={(e) => setForm({ ...form, password: e.target.value })}/>
            <Button
                variant="contained"
                style={{ backgroundColor: '#182952', color: 'white', textTransform: 'none', marginTop: '5%' }}
                fullWidth>
                Login
            </Button>
        </div>
    )
};
export default Login;
