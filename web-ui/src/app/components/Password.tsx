import * as React from 'react';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import { Button } from "antd";

interface IPassword {
    onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}
const Password: React.FunctionComponent<IPassword> = ({ onChange, ...props }) => {
    return (
        <FormControl margin="normal" required fullWidth>
            <Button>TEST</Button>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
                id='password'
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={onChange}
            />
        </FormControl>
    )
}
export default Password;
