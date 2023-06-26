import { Button } from '@material-ui/core';




export default function ActionButton(props) {

    const { children, onClick } = props;
    

    return (
        <Button
            color='primary'
            onClick={onClick}>
            {children}
        </Button>
    )
}
