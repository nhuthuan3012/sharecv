import {
  NtdBookInterview,
  NtdCancelInterview,
  NtdCheckEnoughPointInterview,
} from "@/common/apis/point-package";
import { Input } from "@/common/components/control/Input";
import { Textarea } from "@/common/components/control/textarea";
import { IFormInterview } from "@/interfaces/interviews";
import CloseIcon from "@mui/icons-material/Close";
import { Button, DialogTitle, IconButton, styled } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { resolver } from "../interview-ctv-popup/resolver";
import { NotiEnoughPoint } from "./enough-point";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function NtdBookInterviewDialog({
  open,
  setOpen,
  cv_id,
  total_point,
}: {
  open: boolean;
  setOpen: any;
  cv_id: number;
  total_point: number;
}) {
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseNoti = () => {
    setIsSendRequestBooking(false);
  };
  const [isSendRequestBooking, setIsSendRequestBooking] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInterview>({
    resolver,
  });
  const [missingPoint, setMissingPoint] = React.useState(-1);

  const onSubmit = handleSubmit(async (data) => {
    data.cv_id = cv_id;
    const res = await NtdBookInterview(data);
    if (res.status === 201) {
      setIsSendRequestBooking(true);
      setOpen(false);
    }
  });
  const checkEnoughPoint = async () => {
    const res = await NtdCheckEnoughPointInterview(cv_id);
    setMissingPoint(res.data);
  };
  const handleCancel = async () => {
    const res = await NtdCancelInterview(cv_id);
    if (res.status === 201) {
      // we can notificate to user that the cancel is success
      console.log("Cancel success");
    }
    setIsSendRequestBooking(false);
  };
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
      >
        <DialogTitle
          className="text-2xl font-bold text-primary"
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
        >
          Đặt lịch phỏng vấn
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon color="error" />
        </IconButton>
        <DialogContent>
          <form onSubmit={onSubmit} className="p-10 flex flex-col gap-4">
            <div className="flex gap-20 items-center">
              <Controller
                control={control}
                name="date"
                render={({ field }) => (
                  <div className="flex flex-col">
                    <DatePicker
                      slotProps={{
                        openPickerButton: {
                          color: "primary",
                        },
                        textField: {
                          fullWidth: true,
                          sx: {
                            bgcolor: "white",
                            fieldset: {
                              borderColor: "primary.main",
                              borderRadius: "10px",
                            },
                          },
                        },
                      }}
                      onChange={(date: any) =>
                        field.onChange(date?.format("YYYY-MM-DD HH:mm:ss"))
                      }
                    />
                    {errors.date && (
                      <p className="text-red-500">{errors.date.message}</p>
                    )}
                  </div>
                )}
              />
              <Controller
                control={control}
                name="location"
                render={({ field }) => (
                  <div className="flex flex-col">
                    <Input
                      label="Địa điểm phỏng vấn"
                      required
                      onChange={(e) => field.onChange(e.target.value)}
                      placeholder="Please type here"
                    />
                    {errors.location && (
                      <p className="text-red-500">{errors.location.message}</p>
                    )}
                  </div>
                )}
              />
            </div>
            <div className="flex gap-20">
              <Controller
                control={control}
                name="start_time"
                render={({ field }) => (
                  <div className="flex flex-col">
                    <TimePicker
                      label="Select an option"
                      onChange={(time: any) =>
                        field.onChange(time?.format("YYYY-MM-DD HH:mm:ss"))
                      }
                    />
                    {errors.start_time && (
                      <p className="text-red-500">
                        {errors.start_time.message}
                      </p>
                    )}
                  </div>
                )}
              />
              <Controller
                control={control}
                name="end_time"
                render={({ field }) => (
                  <div className="flex flex-col">
                    <TimePicker
                      label="Select an option"
                      onChange={(time: any) =>
                        field.onChange(time?.format("YYYY-MM-DD HH:mm:ss"))
                      }
                    />
                    {errors.end_time && (
                      <p className="text-red-500">{errors.end_time.message}</p>
                    )}
                  </div>
                )}
              />
            </div>
            <div>
              <Controller
                control={control}
                name="note"
                render={({ field }) => (
                  <div className="flex flex-col">
                    <Textarea label="Ghi chú" rows={4} {...field} />
                    {errors.note && (
                      <p className="text-red-500">{errors.note.message}</p>
                    )}
                  </div>
                )}
              />
            </div>
            <Button
              className="hover:text-primary"
              variant="contained"
              type="submit"
              sx={{ height: "50px", borderRadius: "20px" }}
            >
              Xác nhận
            </Button>
          </form>
        </DialogContent>
      </BootstrapDialog>
      <NotiEnoughPoint
        isBooking={true}
        missingPoint={missingPoint}
        checkEnoughPoint={checkEnoughPoint}
        total_point={total_point}
        open={isSendRequestBooking}
        handleClose={handleCloseNoti}
        handleCancel={handleCancel}
      />
    </React.Fragment>
  );
}
