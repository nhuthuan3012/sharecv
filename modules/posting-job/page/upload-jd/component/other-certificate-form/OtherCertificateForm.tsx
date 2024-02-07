import { Input } from "@/common/components/control/Input";
import { IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useDispatch, useSelector } from "react-redux";
import {
  addOtherCertificate,
  changeOtherCertificate,
  removeOtherCertificate,
  selectUploadJD,
} from "@/lib/redux/slices";

const OtherCertificateForm = () => {
  const uploadJD = useSelector(selectUploadJD);
  const dispatch = useDispatch();
  return (
    <>
      <div className="border-2 border-solid rounded-2xl p-8 border-primary bg-light">
        <div className="flex flex-row justify-between">
          <p className="text-primary font-bold">Chứng chỉ khác</p>
          <button
            onClick={() => dispatch(addOtherCertificate())}
            className=" bg-primary hover:  rounded-3xl text-sm px-16 py-2.5 me-2 mb-2 font-bold border-solid cursor-pointer transform active:scale-75 transition-transform"
            style={{ color: "white", borderColor: "#073776" }}
          >
            Thêm
          </button>
        </div>
        <div className="flex flex-col gap-5">
          {uploadJD.otherCertificate.map((item, index) => (
            <div className=" flex flex-row w-full gap-4 border-slate-300 border-solid p-5 rounded-2xl" key={index}>
              <div className="flex flex-row gap-8 w-full">
                <Input
                  value={item.certificate_name}
                  onChange={(e) =>
                    dispatch(
                      changeOtherCertificate({
                        index: index,
                        key: "certificate_name",
                        value: e.target.value,
                      })
                    )
                  }
                  required
                  placeholder="Please type here"
                  label="Tên chứng chỉ"
                />
                <Input
                  value={item.certificate_point_level}
                  onChange={(e) =>
                    dispatch(
                      changeOtherCertificate({
                        index: index,
                        key: "certificate_point_level",
                        value: e.target.value,
                      })
                    )
                  }
                  required
                  placeholder="Please type here"
                  label="Level"
                />
              </div>
              <div className="mt-8">
                <IconButton
                  onClick={() => dispatch(removeOtherCertificate(index))}
                >
                  <HighlightOffIcon color="error" />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OtherCertificateForm;
