import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import * as React from "react";

export default function DeleteDialog({
  open,
  setOpen,
  action,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  action: any;
}) {
  const handleClose = () => {
    setOpen(false);
  };
  const confirmAction = () => {
    action();
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có chắc chắn muốn xóa không?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button onClick={confirmAction} color="error">
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
