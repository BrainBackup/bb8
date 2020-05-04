import * as React from 'react';
import { Button } from '@material-ui/core';
import Password from 'app/components/Password';
import CustomInput from 'app/components/CustomInput';
import axios from 'axios';

interface IRegister {

}
interface IForm {
    firstName: string,
    lastName: string,
    mailAddress: string,
    password: string
};
const IRegister: React.FunctionComponent<IRegister> = ({ }) => {
    const initialState: IForm = {
        firstName: '',
        lastName: '',
        mailAddress: '',
        password: ''
    };
    const [form, setForm] = React.useState(initialState);
    // const onSubmit = () => {
    //     fetch('http://localhost:3010/users',
    //     {
    //         method: 'POST',
    //         body: JSON.stringify(form),
    //         headers: {
    //             'Access-Control-Allow-Origin': '*'
    //         }
    //     })
    //   .then(data => console.log(data))
    //   .catch(err => console.error(err));
    // }
    const onSubmitNew = () => {
        axios.get('http://localhost:3010/users/al2l').then(data => console.log(data));
        // fetch('http://localhost:3010/users/al2l').then(resp => console.log(resp));
    }
    return (
        <div>
            {/* TODO: add header */}
            <div style={{ display: 'inline' }}>
                <CustomInput label='First Name' onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                <CustomInput label='Last Name' style={{ marginLeft: '15%' }} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
            </div>
            <CustomInput label='Mail Address' fullWidth={true} onChange={(e) => setForm({ ...form, mailAddress: e.target.value })} />
            <Password onChange={(e) => setForm({ ...form, password: e.target.value })}/>
            <Button
                variant="contained"
                style={{ backgroundColor: '#182952', color: 'white', textTransform: 'none', marginTop: '5%' }}
                fullWidth
                onClick={onSubmitNew}>
                Register
            </Button>
        </div>
    )
};
export default IRegister;
