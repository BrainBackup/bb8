import * as React from 'react';
import { Button } from '@material-ui/core';
import CustomInput from 'app/components/CustomInput';
import Password from 'app/components/Password';

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
                style={{ backgroundColor: '#182952', color: 'white', textTransform: 'none', margin: '5%' }}
                fullWidth
                onClick={(e) => console.log(form)}>
                Register
            </Button>
        </div>
    )
};
export default IRegister;
