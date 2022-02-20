
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
  //המודל מציג או הזמנה בודדת או את כל ההזמנות של המשתמש 
  //תלוי מאיפה נקרא למודל
  const classes = useStyles();
  let { open, setOpen, data, orderInfo } = props
  const handleClose = () => setOpen(false);
  let dataMap = data.map((order, index) => <Order key={index} index={index + 1} orderInfo={orderInfo[index]} order={data[index]} />)
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
            {!Array.isArray(data[0]) ? <Order order={data} orderInfo={orderInfo} /> : dataMap}

          </div>
        </Box>
      </Modal>
    </div >
  );
}

