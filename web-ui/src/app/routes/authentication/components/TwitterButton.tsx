import * as React from 'react';
import { Button } from '@material-ui/core';
import { FaTwitter } from 'react-icons/fa';

interface IButton {
    onClick(): void
}
const TwitterButton: React.FunctionComponent<IButton> = ({ onClick, ...props }) => {
    return (
        <Button
            variant="contained"
            style={{ backgroundColor: '#00acee', color: 'white', textTransform: 'none', margin: '5%' }}
            startIcon={<FaTwitter />}
            onClick={onClick}
            fullWidth
        >
            Login With Twitter
        </Button>
    )
}
export default TwitterButton;
