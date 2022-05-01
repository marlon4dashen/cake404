import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';

const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    display:"flex",
    flexDirection: "column",
    justifyContent: "space-between",
    p: 4,
  };
  
  export default function ErrorPopup(props) {

    return (
    <div>
        {props.error && 
        <Modal
          open={props.error ? true : false}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={{
                display:"flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flexGrow: "1",
                alignItems: "center",
            }}>
                <Typography id="error-title" variant="h6" component="h4" 
                sx={{ color: "#cc3300"}}>
                    An Error Occurred!
                </Typography>
                <IconButton 
                    aria-label="close-error" 
                    onClick={props.onHandle}>
                    <CloseIcon fontSize="small" sx={{ color: "black" }}/>
                </IconButton>
            </Box>
            <Divider sx={{bgcolor: "#CC3300", borderBottomWidth: 5}} />
            <Typography id="error-description" sx={{ mt: 2 }}>
              {props.error}
            </Typography>
          </Box>
        </Modal>}
      </div>
    );
  }