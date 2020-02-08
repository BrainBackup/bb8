import * as React from 'react';
import { Button } from '@material-ui/core';
import { FaGithub } from 'react-icons/fa';
//TODO: export it and reuse in other buttons
interface IButton {
    onClick: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}
const GithubButton: React.FunctionComponent<IButton> = ({ onClick, ...props }) => {
    return (
        <Button
            variant="contained"
            style={{ backgroundColor: '#333', color: 'white', textTransform: 'none', margin: '5%' }}
            startIcon={<FaGithub />}
            fullWidth
        >
            Login With Github
        </Button>
    )
}
export default GithubButton;
