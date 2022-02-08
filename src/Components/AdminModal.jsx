
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useStyles from '../Styles/AdminStyle';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Order from './Order';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  height: '800px',
  overflowY: 'auto',
  p: 2
};

export default function AdminModal(props) {
  let { open, setOpen, data } = props

  const handleClose = () => setOpen(false);

  const classes = useStyles();
  let dataMap = data.orders.map((order, index) => <Order key={index} index={index + 1} order={order} />)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <span onClick={handleClose} className={classes.closeBtn}>X</span>
          <h1 className={classes.modalTitle}>{data.firstName} {data.lastName} Orders</h1>
          <div>
            {dataMap}
          </div>
        </Box>
      </Modal>
    </div >
  );
}

