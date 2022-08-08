import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import useStyles from "../Styles/AdminStyle";
import Order from "./Order";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  display: "flex",
  flexDirection: "column",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  height: "800px",
  overflowY: "auto",
  p: 2,
};

export default function AdminModal(props) {
  //המודל מציג או הזמנה בודדת או את כל ההזמנות של המשתמש
  //תלוי מאיפה נקרא למודל
  const classes = useStyles();
  let { open, setOpen, data } = props;

  const handleClose = () => setOpen(false);
  let dataMap;
  if (data.orders) {
    dataMap = data.orders.map((order, index) => (
      <Order key={index} index={index + 1} order={order} />
    ));
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <span onClick={handleClose} className={classes.closeBtn}>
            X
          </span>
          <h1 className={classes.modalTitle}>
            {data.firstName} {data.lastName} Orders
          </h1>
          <div>
            {!dataMap ? <Order order={data.order} /> : dataMap}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
