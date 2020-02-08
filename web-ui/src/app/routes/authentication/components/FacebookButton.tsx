import * as React from 'react';
import { Button } from '@material-ui/core';
import { FaFacebook } from 'react-icons/fa';
//TODO: export it and reuse in other buttons
interface IButton {
    onClick: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}
const FacebookButton: React.FunctionComponent<IButton> = ({ onClick, ...props }) => {
    return (
        <Button
            variant="contained"
            style={{ backgroundColor: '#3b5998', color: 'white', textTransform: 'none', margin: '5%' }}
            startIcon={<FaFacebook />}
            fullWidth
        >
            Login With Facebook
        </Button>
    )
}
export default FacebookButton;
