import {Box, Button, styled} from "@mui/material";

export const StyleStatus = styled(Box)(({ theme }) => ({
    padding:'.5rem',
    borderRadius:'12px',
    color:'white',
    minWidth:'110px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    margin:'.3rem'
}));
export const ConfirmButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#039487',
    color: 'white',
    width:'100%',
    '&:hover': {
        color: 'white',
        backgroundColor: '#039939',

    },
}));


