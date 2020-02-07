import * as React from 'react';

import { FormControl, InputLabel, Input } from ''
interface IUsername {
    onChange: object
}
const Username: React.FunctionComponent<IUsername> = ({ onChange, ...props }) => {
    return (
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username" style={inputStyle}>Username</InputLabel>
            <Input id='username' name="username" style={inputStyle} autoComplete="username" onChange={this.handleChange('username')} autoFocus />
        </FormControl>
    )
}
export default Username;
