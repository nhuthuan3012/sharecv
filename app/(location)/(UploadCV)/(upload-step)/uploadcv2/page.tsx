"use client";

import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useEffect, useState } from "react";
import { FilePondFile } from "filepond";
import "../../UploadCV1.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

import { Input } from "@/common/components/control/Input";
import { Textarea } from "@/common/components/control/textarea";
import CustomSelect from "@/common/components/control/select/Select";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { useDispatch, useSelector } from "react-redux";
import {
  changeAvatar,
  changePersonalInfor,
  counterSlice,
  selectCount,
  selectUploadCV,
} from "@/lib/redux/slices";
import dayjs from "dayjs";

const industries = [
  { value: "education", label: "Education" },
  { value: "construction", label: "Construction" },
  { value: "design", label: "Design" },
  { value: "corporate_services", label: "Corporate Services" },
  { value: "retail", label: "Retail" },
  { value: "energy_mining", label: "Energy & Mining" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "finance", label: "Finance" },
  { value: "recreation_travel", label: "Recreation & Travel" },
  { value: "arts", label: "Arts" },
  { value: "health_care", label: "Health Care" },
  { value: "hardware_networking", label: "Hardware & Networking" },
  { value: "software_it_services", label: "Software & IT Services" },
  { value: "real_estate", label: "Real Estate" },
  { value: "legal", label: "Legal" },
  { value: "agriculture", label: "Agriculture" },
  { value: "media_communications", label: "Media & Communications" },
  { value: "transportation_logistics", label: "Transportation & Logistics" },
  { value: "entertainment", label: "Entertainment" },
  { value: "wellness_fitness", label: "Wellness & Fitness" },
  { value: "public_safety", label: "Public Safety" },
  { value: "public_administration", label: "Public Administration" },
];

const jobTitlesOptions = [
  { value: "executive", label: "Executive" },
  { value: "senior", label: "Senior" },
  { value: "engineer", label: "Engineer" },
  { value: "developer", label: "Developer" },
  { value: "leader", label: "Leader" },
  { value: "supervisor", label: "Supervisor" },
  { value: "senior_leader", label: "Senior Leader" },
  { value: "senior_supervisor", label: "Senior Supervisor" },
  { value: "assistant_manager", label: "Assistant Manager" },
  { value: "manager", label: "Manager" },
  { value: "senior_manager", label: "Senior Manager" },
  { value: "assistant_director", label: "Assistant Director" },
  { value: "vice_director", label: "Vice Director" },
  { value: "deputy_director", label: "Deputy Director" },
  { value: "director", label: "Director" },
  { value: "head", label: "Head" },
  { value: "group", label: "Group" },
  { value: "chief_operating_officer", label: "Chief Operating Officer" },
  { value: "chief_executive_officer", label: "Chief Executive Officer" },
  { value: "chief_product_officer", label: "Chief Product Officer" },
  { value: "chief_financial_officer", label: "Chief Financial Officer" },
  { value: "general_manager", label: "General Manager" },
  { value: "general_director", label: "General Director" },
];

const provincesOptions = [
  { value: "ha_noi", label: "Hà Nội" },
  { value: "ho_chi_minh", label: "Hồ Chí Minh" },
  { value: "an_giang", label: "An Giang" },
  { value: "ba_ria_vung_tau", label: "Bà Rịa - Vũng Tàu" },
  { value: "bac_lieu", label: "Bạc Liêu" },
  { value: "bac_giang", label: "Bắc Giang" },
  { value: "bac_kan", label: "Bắc Kạn" },
  { value: "bac_ninh", label: "Bắc Ninh" },
  { value: "ben_tre", label: "Bến Tre" },
  { value: "binh_dinh", label: "Bình Định" },
  { value: "binh_duong", label: "Bình Dương" },
  { value: "binh_phuoc", label: "Bình Phước" },
  { value: "binh_thuan", label: "Bình Thuận" },
  { value: "ca_mau", label: "Cà Mau" },
  { value: "can_tho", label: "Cần Thơ" },
  { value: "cao_bang", label: "Cao Bằng" },
  { value: "da_nang", label: "Đà Nẵng" },
  { value: "dak_lak", label: "Đắk Lắk" },
  { value: "dak_nong", label: "Đắk Nông" },
  { value: "dien_bien", label: "Điện Biên" },
  { value: "dong_nai", label: "Đồng Nai" },
  { value: "dong_thap", label: "Đồng Tháp" },
  { value: "gia_lai", label: "Gia Lai" },
  { value: "ha_giang", label: "Hà Giang" },
  { value: "ha_nam", label: "Hà Nam" },
  { value: "ha_tinh", label: "Hà Tĩnh" },
  { value: "hai_duong", label: "Hải Dương" },
  { value: "hai_phong", label: "Hải Phòng" },
  { value: "hau_giang", label: "Hậu Giang" },
  { value: "hoa_binh", label: "Hòa Bình" },
  { value: "hung_yen", label: "Hưng Yên" },
  { value: "khanh_hoa", label: "Khánh Hòa" },
  { value: "kien_giang", label: "Kiên Giang" },
  { value: "kon_tum", label: "Kon Tum" },
  { value: "lai_chau", label: "Lai Châu" },
  { value: "lam_dong", label: "Lâm Đồng" },
  { value: "lang_son", label: "Lạng Sơn" },
  { value: "lao_cai", label: "Lào Cai" },
  { value: "long_an", label: "Long An" },
  { value: "nam_dinh", label: "Nam Định" },
  { value: "nghe_an", label: "Nghệ An" },
  { value: "ninh_binh", label: "Ninh Bình" },
  { value: "ninh_thuan", label: "Ninh Thuận" },
  { value: "phu_tho", label: "Phú Thọ" },
  { value: "phu_yen", label: "Phú Yên" },
  { value: "quang_binh", label: "Quảng Bình" },
  { value: "quang_nam", label: "Quảng Nam" },
  { value: "quang_ngai", label: "Quảng Ngãi" },
  { value: "quang_ninh", label: "Quảng Ninh" },
  { value: "quang_tri", label: "Quảng Trị" },
  { value: "soc_trang", label: "Sóc Trăng" },
  { value: "son_la", label: "Sơn La" },
  { value: "tay_ninh", label: "Tây Ninh" },
  { value: "thai_binh", label: "Thái Bình" },
  { value: "thai_nguyen", label: "Thái Nguyên" },
  { value: "thanh_hoa", label: "Thanh Hóa" },
  { value: "thua_thien_hue", label: "Thừa Thiên Huế" },
  { value: "tien_giang", label: "Tiền Giang" },
  { value: "tra_vinh", label: "Trà Vinh" },
  { value: "tuyen_quang", label: "Tuyên Quang" },
  { value: "vinh_long", label: "Vĩnh Long" },
  { value: "vinh_phuc", label: "Vĩnh Phúc" },
  { value: "yen_bai", label: "Yên Bái" },
];

const countriesOptions = [
  { value: "us", label: "Mỹ (US)" },
  { value: "cn", label: "Trung Quốc (CN)" },
  { value: "in", label: "Ấn Độ (IN)" },
  { value: "br", label: "Brazil (BR)" },
  { value: "ru", label: "Nga (RU)" },
  { value: "jp", label: "Nhật Bản (JP)" },
  { value: "de", label: "Đức (DE)" },
  { value: "gb", label: "Anh (GB)" },
  { value: "fr", label: "Pháp (FR)" },
  { value: "au", label: "Úc (AU)" },
  { value: "ca", label: "Canada (CA)" },
  { value: "dk", label: "Đan Mạch (DK)" },
  { value: "nl", label: "Hà Lan (NL)" },
  { value: "be", label: "Bỉ (BE)" },
  { value: "ch", label: "Thụy Sĩ (CH)" },
  { value: "se", label: "Thụy Điển (SE)" },
  { value: "it", label: "Ý (IT)" },
  { value: "es", label: "Tây Ban Nha (ES)" },
  { value: "kr", label: "Hàn Quốc (KR)" },
  { value: "sg", label: "Singapore (SG)" },
  { value: "my", label: "Malaysia (MY)" },
  { value: "th", label: "Thái Lan (TH)" },
  { value: "id", label: "Indonesia (ID)" },
  { value: "nz", label: "New Zealand (NZ)" },
  { value: "ng", label: "Nigeria (NG)" },
  { value: "za", label: "Nam Phi (ZA)" },
  { value: "ke", label: "Kenya (KE)" },
  { value: "gh", label: "Ghana (GH)" },
  { value: "et", label: "Ethiopia (ET)" },
  { value: "mx", label: "Mexico (MX)" },
  { value: "ar", label: "Argentina (AR)" },
  { value: "co", label: "Colombia (CO)" },
  { value: "cl", label: "Chile (CL)" },
  { value: "sa", label: "Saudi Arabia (SA)" },
  { value: "il", label: "Israel (IL)" },
  { value: "tr", label: "Thổ Nhĩ Kỳ (TR)" },
  { value: "ir", label: "Iran (IR)" },
];

const gender = [
  { value: "male", label: "Nam" },
  { value: "female", label: "Nữ" },
  { value: "other", label: "Khác" },
];

const UploadCV2 = () => {
  const [files, setFiles] = useState<File[]>([]);
  const uploadCV = useSelector(selectUploadCV);
  const dispatch = useDispatch();
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="container">
          <div className="p-10 bg-background rounded-3xl">
            <div>
              <p className="text-default text-primary font-medium">
                Ảnh đại diện
              </p>
              <div className="w-1/4">
                <FilePond
                  required
                  files={files}
                  onupdatefiles={(files: FilePondFile[]) => {
                    setFiles(files.map((file) => file.file as File));
                  }}
                  allowMultiple={false}
                  instantUpload={false}
                  credits={false}
                  name="files"
                  labelIdle='<span class="flex flex-row gap-4 items-center filepond--label-action bg-blue-700 hover:bg-blue-600 py-2 px-4 text-white font-bold no-underline rounded-xl"><svg width="16px" height="16px" viewBox="0 -2 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>upload</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-569.000000, -674.000000)" fill="#ffffff"> <path d="M579.732,681.7 L583,677.74 L583,691.998 C583,692.552 583.447,693 584,693 C584.553,693 585,692.552 585,691.998 L585,677.702 L588.299,681.7 C588.69,682.095 589.326,682.095 589.719,681.7 C590.11,681.307 590.11,680.668 589.719,680.274 L584.776,674.283 C584.566,674.073 584.289,673.983 584.016,673.998 C583.742,673.983 583.465,674.073 583.256,674.283 L578.313,680.274 C577.921,680.668 577.921,681.307 578.313,681.7 C578.705,682.095 579.341,682.095 579.732,681.7 L579.732,681.7 Z M598,690 C597.447,690 597,690.448 597,691 L597,698 L571,698 L571,691 C571,690.448 570.553,690 570,690 C569.447,690 569,690.448 569,691 L569,699 C569,699.553 569.447,700 570,700 L598,700 C598.553,700 599,699.553 599,699 L599,691 C599,690.448 598.553,690 598,690 L598,690 Z" id="upload" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg> Upload File</span>'
                />
                <p className="text-gray">Kích thước ảnh lớn nhất: 2MB</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-24">
                <Input
                  required
                  label="Họ và tên"
                  defaultValue={uploadCV.personal_infor.name}
                  placeholder="Please type here"
                  onChange={(e) =>
                    dispatch(
                      changePersonalInfor({
                        value: e.target.value,
                        key: "name",
                      })
                    )
                  }
                />
                <CustomSelect
                  instanceId={"industry"}
                  isMulti={false}
                  required
                  defaultValue={{
                    value: uploadCV.personal_infor.industry,
                    label: uploadCV.personal_infor.industry,
                  }}
                  label="Ngành nghề"
                  options={industries}
                  onChange={(value) =>
                    dispatch(
                      changePersonalInfor({
                        value: value?.label as string,
                        key: "industry",
                      })
                    )
                  }
                />
              </div>
              <div className="flex flex-row gap-24">
                <Input
                  required
                  label="Công việc hiện tại"
                  defaultValue={uploadCV.personal_infor.job}
                  placeholder="Please type here"
                  onChange={(e) =>
                    dispatch(
                      changePersonalInfor({ value: e.target.value, key: "job" })
                    )
                  }
                />
                <CustomSelect
                  instanceId={"level"}
                  required
                  label="Cấp bậc hiện tại"
                  defaultValue={{
                    value: uploadCV.personal_infor.level,
                    label: uploadCV.personal_infor.level,
                  }}
                  isMulti={false}
                  options={jobTitlesOptions}
                  onChange={(value) =>
                    dispatch(
                      changePersonalInfor({
                        value: value?.label as string,
                        key: "level",
                      })
                    )
                  }
                />
              </div>
              <div className="flex flex-row gap-24">
                <Input
                  required
                  label="Email ứng viên"
                  placeholder="Please type here"
                  defaultValue={uploadCV.personal_infor.email}
                  onChange={(e) =>
                    dispatch(
                      changePersonalInfor({
                        value: e.target.value,
                        key: "email",
                      })
                    )
                  }
                />
                <Input
                  required
                  label="Số điện thoại ứng viên"
                  placeholder="Please type here"
                  defaultValue={uploadCV.personal_infor.phone}
                  onChange={(e) =>
                    dispatch(
                      changePersonalInfor({
                        value: e.target.value,
                        key: "phone",
                      })
                    )
                  }
                />
              </div>
              <div className="flex flex-row gap-24">
                <Input
                  required
                  label="Địa chỉ"
                  placeholder="Please type here"
                  defaultValue={uploadCV.personal_infor.address}
                  onChange={(e) =>
                    dispatch(
                      changePersonalInfor({
                        value: e.target.value,
                        key: "address",
                      })
                    )
                  }
                />
              </div>
              <div className="flex flex-row gap-24">
                <CustomSelect
                  instanceId={"city"}
                  required
                  isMulti={false}
                  options={provincesOptions}
                  label="Thành phố"
                  defaultValue={{
                    value: uploadCV.personal_infor.city,
                    label: uploadCV.personal_infor.city,
                  }}
                  onChange={(value) =>
                    dispatch(
                      changePersonalInfor({
                        value: value?.value as string,
                        key: "city",
                      })
                    )
                  }
                />
                <CustomSelect
                  instanceId={"country"}
                  required
                  isMulti={false}
                  options={countriesOptions}
                  defaultValue={{
                    value: uploadCV.personal_infor.country,
                    label: uploadCV.personal_infor.country,
                  }}
                  label="Quốc gia"
                  onChange={(value) =>
                    dispatch(
                      changePersonalInfor({
                        value: value?.value as string,
                        key: "country",
                      })
                    )
                  }
                />
              </div>
              <div className="flex flex-row gap-24">
                <Textarea
                  label="Mục tiêu nghề nghiệp"
                  required
                  rows={6}
                  defaultValue={uploadCV.personal_infor.objective}
                  onChange={(e) =>
                    dispatch(
                      changePersonalInfor({
                        value: e.target.value,
                        key: "objective",
                      })
                    )
                  }
                />
              </div>
              <div className="flex flex-row gap-24">
                <div className="w-full">
                  <p className="font-medium text-primary  text-sm">
                    Ngày sinh<span className="text-red-500">*</span>
                  </p>
                  <DatePicker
                    value={dayjs(uploadCV.personal_infor.birthday)}
                    onChange={(date) =>
                      dispatch(
                        changePersonalInfor({
                          value: date
                            ?.format("YYYY-MM-DD HH:mm:ss")
                            .toString() as string,
                          key: "birthday",
                        })
                      )
                    }
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
                  />
                </div>
                <CustomSelect
                  required
                  isMulti={false}
                  label="Giới tính"
                  options={gender}
                  instanceId={"gender"}
                  defaultValue={{
                    value: uploadCV.personal_infor.gender,
                    label: uploadCV.personal_infor.gender,
                  }}
                  onChange={(value) =>
                    dispatch(
                      changePersonalInfor({
                        value: value?.value as string,
                        key: "gender",
                      })
                    )
                  }
                />
              </div>
              <div className="flex flex-row gap-24">
                <Input
                  required
                  label="Số CCCD/ CMND"
                  placeholder="Please type here"
                  defaultValue={uploadCV.personal_infor.id}
                  onChange={(e) =>
                    dispatch(
                      changePersonalInfor({ value: e.target.value, key: "id" })
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="p-10 bg-background mt-10 rounded-3xl">
            <div className="flex flex-col gap-10">
              <p className="text-primary font-bold text-xl">Mạng xã hội</p>
              <div className="flex flex-row gap-24">
                <div className="w-full">
                  <div className="flex flex-row gap-3">
                    <LinkedInIcon className="text-primary" />
                    <p className="font-bold text-primary  my-0">Linkedln</p>
                  </div>
                  <Input
                    placeholder="Link Linkedln công ty"
                    defaultValue={uploadCV.personal_infor.linkedln}
                    onChange={(e) =>
                      dispatch(
                        changePersonalInfor({
                          value: e.target.value,
                          key: "linkedln",
                        })
                      )
                    }
                  />
                </div>
                <div className="w-full">
                  <div className="flex flex-row gap-3">
                    <LanguageIcon className="text-primary" />
                    <p className="font-bold text-primary my-0">Website</p>
                  </div>
                  <Input
                    placeholder="Link website công ty"
                    defaultValue={uploadCV.personal_infor.website}
                    onChange={(e) =>
                      dispatch(
                        changePersonalInfor({
                          value: e.target.value,
                          key: "website",
                        })
                      )
                    }
                  />
                </div>
              </div>
              <div className="flex flex-row gap-24">
                <div className="w-full">
                  <div className="flex flex-row gap-3">
                    <FacebookIcon className="text-primary" />
                    <p className="font-bold text-primary  my-0">Facebook</p>
                  </div>
                  <Input
                    placeholder="Link Facebook công ty"
                    defaultValue={uploadCV.personal_infor.facebook}
                    onChange={(e) =>
                      dispatch(
                        changePersonalInfor({
                          value: e.target.value,
                          key: "facebook",
                        })
                      )
                    }
                  />
                </div>
                <div className="w-full">
                  <div className="flex flex-row gap-3">
                    <YouTubeIcon className="text-primary" />
                    <p className="font-bold text-primary  my-0">Youtube</p>
                  </div>
                  <Input
                    placeholder="Link Youtube công ty"
                    defaultValue={uploadCV.personal_infor.youtube}
                    onChange={(e) =>
                      dispatch(
                        changePersonalInfor({
                          value: e.target.value,
                          key: "youtube",
                        })
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex flex-row justify-between">
              <button
                type="button"
                className=" bg-primary rounded-3xl text-sm px-16 py-2.5 me-2 mb-2 font-bold border-none cursor-pointer text-white"
              >
                Hủy
              </button>
              <div className="flex flex-row gap-5">
                <button
                  type="button"
                  className=" bg-primary rounded-3xl border-none text-sm px-16 py-2.5 me-2 mb-2 font-bold cursor-pointer text-white"
                >
                  Lưu nháp
                </button>
                <button
                  type="button"
                  className=" bg-primary rounded-3xl text-sm px-16 py-2.5 me-2 mb-2 font-bold border-none cursor-pointer text-white"
                >
                  Tiếp tục
                </button>
              </div>
            </div>
          </div>
        </div>
      </LocalizationProvider>
    </>
  );
};

export default UploadCV2;
