import * as React from 'react';
import { FormControl, InputLabel, Input } from '@material-ui/core';

interface IUsername {
    onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
    label: string,
    fullWidth?: boolean,
    style?: object
}
const CustomInput: React.FunctionComponent<IUsername> = ({ label, onChange, ...props }) => {
    return (
        <FormControl margin="normal" required { ...props}>
            <InputLabel htmlFor={label} >{label}</InputLabel>
            <Input id={label} name={label} autoComplete={label} onChange={onChange} autoFocus />
        </FormControl>
    )
}
export default CustomInput;
