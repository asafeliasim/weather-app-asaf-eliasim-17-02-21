import {makeStyles} from "@material-ui/core/styles";

export const searchStyle = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '40ch',
        },
        '& .MuiOutlinedInput-input':{
            backgroundColor:'#fff',
            fontSize:'2rem',
        },
        '& .MuiInputLabel-outlined':{
            fontSize:'1.4rem',
        }

    },
}));
export const forecastStyle = makeStyles((theme)=>({
    root: {
        minWidth: 200,
        margin:'1rem 2rem',
        background:"#e4e4e4"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        margin: 14,

    },
    avatar: {
        display: 'flex',
        width:'5rem',
        '& > *': {
            margin: theme.spacing(3),
        },
    }
}));
export const errorStyle = makeStyles((theme)=>({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(4),
        },
        '& .MuiAlert-message':{
            fontSize:18,
            padding:'2rem 1rem'
        },
        '& .MuiSvgIcon-fontSizeInherit':{
            fontSize:28,
            marginTop: '1.2rem'
        }
    },
}))
