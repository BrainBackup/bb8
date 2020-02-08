import * as React from 'react';

import { FormControl, InputLabel, Input } from '@material-ui/core';
interface IUsername {
    onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}
const Username: React.FunctionComponent<IUsername> = ({ onChange, ...props }) => {
    return (
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username" >Username</InputLabel>
            <Input id='username' name="username" autoComplete="username" onChange={onChange} autoFocus />
        </FormControl>
    )
}
export default Username;
