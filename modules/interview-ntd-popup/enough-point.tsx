import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";

export const NotiEnoughPoint = ({
  missingPoint,
  total_point,
  open,
  handleClose,
  handleCancel,
  checkEnoughPoint,
  isBooking,
}: {
  missingPoint: number;
  total_point: number;
  open: boolean;
  handleClose: any;
  handleCancel: any;
  checkEnoughPoint: any;
  isBooking?: boolean;
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      aria-labelledby="form-dialog-title"
    >
      <DialogContent>
        {missingPoint < 0 ? (
          <>
            <p className="font-bold text-xl">
              Bạn sẽ bị trừ
              <span className="text-red-500"> {total_point} điểm</span> cho giao
              dịch này
            </p>
            {isBooking && (
              <p> Bạn sẽ được hoàn lại khi Ứng viên từ chối phỏng vấn </p>
            )}
          </>
        ) : missingPoint === 0 ? (
          <div className="flex flex-col gap-10 justify-center items-center">
            <p className="font-bold text-xl">Giao dịch thành công</p>
            <CheckCircleOutlineIcon color="success" />
          </div>
        ) : (
          <p className="font-bold text-xl">
            Bạn còn thiếu
            <span className="text-red-500"> {missingPoint} điểm</span> để thực
            hiện giao dịch này
          </p>
        )}
      </DialogContent>
      {missingPoint > 0 ? (
        <DialogActions>
          <Button
            className="hover:text-primary"
            variant="contained"
            onClick={() => handleClose()}
            sx={{ height: "50px", borderRadius: "20px" }}
          >
            Hủy
          </Button>
          <Button
            className="hover:text-primary"
            variant="contained"
            onClick={() => {}}
            sx={{ height: "50px", borderRadius: "20px" }}
          >
            Mua điểm
          </Button>
        </DialogActions>
      ) : missingPoint < 0 ? (
        <DialogActions>
          <Button
            className="hover:text-primary"
            variant="contained"
            onClick={() => handleCancel()}
            sx={{ height: "50px", borderRadius: "20px" }}
          >
            Hủy
          </Button>
          <Button
            className="hover:text-primary"
            variant="contained"
            onClick={() => {
              checkEnoughPoint();
            }}
            sx={{ height: "50px", borderRadius: "20px" }}
          >
            Xác nhận
          </Button>
        </DialogActions>
      ) : null}
    </Dialog>
  );
};
