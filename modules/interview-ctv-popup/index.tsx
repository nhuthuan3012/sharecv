import {
  confirmInterviewInfo,
  rescheduleInterview,
} from "@/common/apis/interview";
import { Input } from "@/common/components/control/Input";
import { Textarea } from "@/common/components/control/textarea";
import { IFormInterview } from "@/interfaces/interviews";
import CloseIcon from "@mui/icons-material/Close";
import { Button, DialogTitle, IconButton, styled } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { resolver } from "./resolver";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function InterviewDialog({
  open,
  setOpen,
  isBooking,
  defaultValues,
}: {
  open: boolean;
  setOpen: any;
  isBooking: boolean;
  defaultValues: IFormInterview;
}) {
  const handleClose = () => {
    setOpen(false);
  };
  const [confirmInterview, setConfirmInterview] = React.useState(!isBooking);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInterview>({
    resolver,
    defaultValues: defaultValues,
  });

  const onSubmit = handleSubmit(async (data) => {
    if (confirmInterview) {
      console.log("confirmInterview", data);
      const res = await confirmInterviewInfo(data.cv_id);
    } else {
      console.log("isBooking", data);
      const res = await rescheduleInterview(data);
      console.log(res);
    }
  });
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
          {confirmInterview ? "Xác nhận Lịch phỏng vấn" : "Đặt lịch phỏng vấn"}
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
            <div className="flex gap-20">
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
                      //defaultValue={dayjs(defaultInterview?.date)}
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
                  <>
                    <Input
                      label="Địa điểm phỏng vấn"
                      required
                      //defaultValue={defaultInterview?.location}
                      onChange={(e) => field.onChange(e.target.value)}
                      placeholder="Please type here"
                    />
                    {errors.location && (
                      <p className="text-red-500">{errors.location.message}</p>
                    )}
                  </>
                )}
              />
            </div>
            <div className="flex gap-20">
              <Controller
                control={control}
                name="start_time"
                render={({ field }) => (
                  <>
                    <TimePicker
                      label="Select an option"
                      //defaultValue={dayjs(defaultInterview?.start_time)}
                      onChange={(time: any) =>
                        field.onChange(time?.format("YYYY-MM-DD HH:mm:ss"))
                      }
                    />
                    {errors.start_time && (
                      <p className="text-red-500">
                        {errors.start_time.message}
                      </p>
                    )}
                  </>
                )}
              />
              <Controller
                control={control}
                name="end_time"
                render={({ field }) => (
                  <>
                    <TimePicker
                      label="Select an option"
                      //defaultValue={dayjs(defaultInterview?.end_time)}
                      onChange={(time: any) =>
                        field.onChange(time?.format("YYYY-MM-DD HH:mm:ss"))
                      }
                    />
                    {errors.end_time && (
                      <p className="text-red-500">{errors.end_time.message}</p>
                    )}
                  </>
                )}
              />
            </div>
            <div>
              <Controller
                control={control}
                name="note"
                render={({ field }) => (
                  <>
                    <Textarea
                      label="Ghi chú"
                      //defaultValue={defaultInterview?.note}
                      rows={4}
                      {...field}
                    />
                    {errors.note && (
                      <p className="text-red-500">{errors.note.message}</p>
                    )}
                  </>
                )}
              />
            </div>
            {confirmInterview ? (
              <div className="flex">
                <Button
                  sx={{
                    borderColor: "error.main",
                    border: 1,
                  }}
                  className="mr-10 rounded-full border-2"
                  onClick={() => {
                    reset();
                    setConfirmInterview(false);
                  }}
                  color="error"
                >
                  Đề xuất lịch mới
                </Button>
                <Button
                  sx={{ borderColor: "primary.main", border: 1 }}
                  className="rounded-full border-2"
                  type="submit"
                  color="primary"
                >
                  Đồng ý
                </Button>
              </div>
            ) : (
              <Button
                sx={{ borderColor: "primary.main", border: 1 }}
                className="rounded-full border-2"
                type="submit"
                color="primary"
              >
                {" "}
                Xác nhận{" "}
              </Button>
            )}
          </form>
        </DialogContent>
        <DialogActions></DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
