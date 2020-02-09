import * as React from 'react';
import CustomInput from 'app/components/CustomInput';
import Password from 'app/components/Password';

interface ILogin {

}
const Login: React.FunctionComponent<ILogin> = ({ }) => {
    return (
        <div>
            <CustomInput label='Username' onChange={(e) => console.log(e.target.value)} />
            <Password onChange={(e) => console.log(e.target.value)}/>
        </div>
    )
};
export default Login;
