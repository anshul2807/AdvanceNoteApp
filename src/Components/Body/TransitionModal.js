import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import OpenModal from './OpenModal'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    border: '1px solid #fff',
    boxShadow: theme.shadows[5],
    background : '#202124',
    borderRadius: '10px',
    
  },
}));

export default function TransitionsModal({open,setOpen,id,title,note}) {
  const classes = useStyles();


 

  const handleClose = ({stateModal}) => {
    setOpen(false);
  };

  return (
    
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <OpenModal id={id} title={title} note={note} setOpen={setOpen}/>
          </div>
        </Fade>
      </Modal>
    
  );
}
