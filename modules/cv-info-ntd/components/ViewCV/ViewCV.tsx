"use client";
import { IResume } from "@/modules/cv-info/resume.interface";
import {
  Document,
  Font,
  Image,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import dayjs from "dayjs";
import "react-pdf/dist/Page/TextLayer.css";

// Create styles
Font.register({
  family: "Montserrat",
  // src: "http://fonts.gstatic.com/s/montserrat/v10/zhcz-_WihjSQC0oHJ9TCYC3USBnSvpkopQaUR-2r7iU.ttf",
  fonts: [
    {
      src: "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-Y3tcoqK5.ttf",
      fontWeight: 400,
    },
    {
      src: "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Uw-Y3tcoqK5.ttf",
      fontWeight: 100,
    },
    {
      src: "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvr6Ew-Y3tcoqK5.ttf",
      fontWeight: 200,
    },
    {
      src: "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Ew-Y3tcoqK5.ttf",
      fontWeight: 300,
    },
    {
      src: "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Ew-Y3tcoqK5.ttf",
      fontWeight: 500,
    },
    // 
    {
      src: "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu170w-Y3tcoqK5.ttf",
      fontWeight: 600,
    },
    {
      src: "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM70w-Y3tcoqK5.ttf",
      fontWeight: 700,
    },
    {
      src: "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvr70w-Y3tcoqK5.ttf",
      fontWeight: 800,
    },
    {
      src: "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvC70w-Y3tcoqK5.ttf",
      fontWeight: 900,
    },
    {
      src: "http://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq6R8aX9-p7K5ILg.ttf",
      fontWeight: 100,
      fontStyle: "italic",
    },
    {
      src: "http://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jqyR9aX9-p7K5ILg.ttf",
      fontWeight: 200,
      fontStyle: "italic",
    },
    {
      src: "http://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq_p9aX9-p7K5ILg.ttf",
      fontWeight: 300,
      fontStyle: "italic",
    },
    {
      src: "http://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq6R9aX9-p7K5ILg.ttf",
      fontWeight: 400,
      fontStyle: "italic",
    },
    {
      src: "http://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq5Z9aX9-p7K5ILg.ttf",
      fontWeight: 500,
      fontStyle: "italic",
    },
    {
      src: "http://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq3p6aX9-p7K5ILg.ttf",
      fontWeight: 600,
      fontStyle: "italic",
    },
    {
      src: "http://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6aX9-p7K5ILg.ttf",
      fontWeight: 700,
      fontStyle: "italic",
    },
    {
      src: "http://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jqyR6aX9-p7K5ILg.ttf",
      fontWeight: 800,
      fontStyle: "italic",
    },
    {
      src: "http://fonts.gstatic.com/s/montserrat/v26/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jqw16aX9-p7K5ILg.ttf",
      fontWeight: 900,
      fontStyle: "italic",
    },
  ]
});

const styles = StyleSheet.create({
  body: {
    gap: 20,
    // backgroundImage: `url(${"/login-background.png"})`,
    display: "flex",
    // flexDirection: "column",
    alignContent: "flex-start",
    paddingTop: 65,
    paddingBottom: 15,
    paddingHorizontal: 35,
  },
  pageBackground: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    minWidth: "100%",
    minHeight: "100%",
    height: "100%",
    width: "100%",
    filter: {
      blur: "4px",
    },
    opacity: 0.2,
    zIndex: "-1",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  name: {
    fontSize: 20,
    fontFamily: "Montserrat",
    color: "rgba(6, 55, 118, 1)",
  },
  industry: {
    fontSize: 18,
    fontFamily: "Montserrat",
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Helvetica-Bold",
  },
  nomarl: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  viewRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
});

// Create Document Component
const ViewCV = ({
  cv_id,
  status,
  job_service,
  avatar,
  candidate_name,
  current_job,
  industry,
  birthday,
  gender,
  objectives,
  email,
  phone,
  identification_code,
  address,
  city,
  country,
  linkedin,
  website,
  facebook,
  instagram,
  skills,
  total_point,
  experience,
  educations,
  projects,
  awards,
  certificates,
}: IResume) => {
  // educations&&console.log("data", educations[0].start_time);
  return (
    // <Box   width={"500px"} height={"1200px"} sx={{}}>
    <PDFViewer showToolbar={false} width={"80%"} height={"1200px"}>
      <Document style={{ width: "100%", height: "1200px" }}>
        <Page wrap size="A4" style={styles.body}>
          <View style={styles.pageBackground}>
            <Image style={{ display: "flex" }} src="/Logo.png" />
          </View>
          <View
            style={{
              height: "100px",
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                height: "auto",
                display: "flex",
                width: "40%",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <Image style={{ height: "auto" }} src="/Logo.png" />
            </View>
            <View
              style={{
                display: "flex",
                width: "60%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Text style={styles.name}>Họ và tên</Text>
              <Text style={styles.industry}>{industry}</Text>
            </View>
          </View>
          <View
            style={{
              height: "100px",
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                display: "flex",
                width: "30%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Text style={{ color: "rgba(6, 55, 118, 1)" }}> Infomation </Text>
            </View>
            <View
              style={{
                display: "flex",
                width: "70%",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <View style={styles.viewRow}>
                <Text style={styles.text}>Day of Birth: </Text>
                <Text style={{ color: "black", fontWeight: 40, fontSize: 12 }}>
                  {`${dayjs(birthday).format("DD/MM/YYYY")}`}
                </Text>
              </View>
              <View style={styles.viewRow}>
                <Text style={styles.text}>Age: </Text>
                <Text style={{ color: "black", fontWeight: 40, fontSize: 12 }}>
                  {`${dayjs(birthday).format("DD/MM/YYYY")}`}
                </Text>
              </View>
              <View style={styles.viewRow}>
                <Text style={styles.text}>Sex: </Text>
                <Text style={{ color: "black", fontWeight: 40, fontSize: 12 }}>
                  {gender}
                </Text>
              </View>
            </View>
          </View>
          {educations&&(
          <View
            style={{
              borderTop: 1,
              borderColor: "#D9D9D9",
              display: "flex",
              width: "100%",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <View
              style={{
                display: "flex",
                height: "70px",
                width: "100%",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Text style={{ color: "rgba(6, 55, 118, 1)" }}> Education </Text>
            </View>
            <View
              wrap={false}
              style={{
                gap: "10px",
                display: "flex",
                width: "100%",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              {educations.map((item, index) => (
                <View
                  key={index}
                  wrap={false}
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      width: "30%",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text style={{ color: "gray", fontSize: 12 }}>
                      {" "}
                      {`${
                        item.start_time !== undefined
                          ? dayjs(item.start_time).format("MM/YYYY")
                          : ""
                      } -`}{" "}
                    </Text>
                    <Text style={{ color: "gray", fontSize: 12 }}>
                      {" "}
                      {`${
                        item.end_time !== undefined
                          ? dayjs(item.end_time).format("MM/YYYY")
                          : ""
                      }`}{" "}
                    </Text>
                  </View>
                  <View
                    style={{
                      gap: "5px",
                      display: "flex",
                      width: "70%",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text style={styles.text}>{item.institute}</Text>
                    <Text
                      style={{ color: "black", fontSize: 12 }}
                    >{`${item.degree} ${item.major}`}</Text>
                    <Text style={{ color: "black", fontSize: 12 }}>
                      {item.gpa}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          )}
          {experience&&(
          <View
            style={{
              borderTop: 1,
              borderColor: "#D9D9D9",
              display: "flex",
              width: "100%",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <View
              style={{
                display: "flex",
                height: "70px",
                width: "100%",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Text style={{ color: "rgba(6, 55, 118, 1)" }}> Experience </Text>
            </View>
            <View
              wrap={false}
              style={{
                gap: "10px",
                display: "flex",
                width: "100%",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              {experience.map((item, index) => (
                <View
                  key={index}
                  wrap={false}
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      width: "30%",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text style={{ color: "gray", fontSize: 12 }}>
                      {" "}
                      {`${
                        item.start_time !== undefined
                          ? dayjs(item.start_time).format("MM/YYYY")
                          : ""
                      } -`}{" "}
                    </Text>
                    <Text style={{ color: "gray", fontSize: 12 }}>
                      {" "}
                      {`${
                        item.end_time !== undefined
                          ? dayjs(item.end_time).format("MM/YYYY")
                          : ""
                      }`}{" "}
                    </Text>
                  </View>
                  <View
                    style={{
                      gap: "5px",
                      display: "flex",
                      width: "70%",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text style={styles.text}>{item.job_title}</Text>
                    <Text style={{ color: "black", fontSize: 12 }}>
                      {item.company_name}
                    </Text>
                    <Text
                      style={{ color: "black", fontSize: 12 }}
                    >{`${item.levels} ${item.roles}`}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          )}
          {skills&&(
          <View
            style={{
              borderTop: 1,
              borderColor: "#D9D9D9",
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                display: "flex",
                width: "30%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Text style={{ color: "rgba(6, 55, 118, 1)" }}> Skills </Text>
            </View>
            <View
              style={{
                gap: "5px",
                display: "flex",
                width: "70%",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              {skills.map((item,index)=>(<Text key={index} style={styles.nomarl}>{item} </Text>))}
            </View>
          </View>
          )}
          {certificates&&(
          <View
            style={{
              borderTop: 1,
              borderColor: "#D9D9D9",
              display: "flex",
              width: "100%",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <View
              style={{
                display: "flex",
                height: "70px",
                width: "100%",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Text style={{ color: "rgba(6, 55, 118, 1)" }}>
                {" "}
                Certificates{" "}
              </Text>
            </View>
            <View
              wrap={false}
              style={{
                gap: "10px",
                display: "flex",
                width: "100%",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              {certificates.language_certificates.map((item, index) => (
                <View
                  key={index}
                  wrap={false}
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      width: "30%",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text style={{ color: "gray", fontSize: 12 }}>
                     1/2019 -
                    </Text>
                    <Text style={{ color: "gray", fontSize: 12 }}>
                     1/2022
                    </Text>
                  </View>
                  <View
                    style={{
                      gap: "5px",
                      display: "flex",
                      width: "70%",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text style={styles.text}>{item.certificate_language}</Text>
                    <Text
                      style={{ color: "black", fontSize: 12 }}
                    >{`${item.certificate_name} - ${item.certificate_level}`}</Text>
                    <Text style={{ color: "black", fontSize: 12 }}>
                      {item.certificate_level}
                    </Text>
                  </View>
                </View>
              ))}
              {certificates.other_certificate.map((item, index) => (
                <View
                  key={index}
                  wrap={false}
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      width: "30%",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text style={{ color: "gray", fontSize: 12 }}>
                     1/2019 -
                    </Text>
                    <Text style={{ color: "gray", fontSize: 12 }}>
                     1/2021
                    </Text>
                  </View>
                  <View
                    style={{
                      gap: "5px",
                      display: "flex",
                      width: "70%",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text style={styles.text}>{item.certificate_name}</Text>
                    <Text
                      style={{ color: "black", fontSize: 12 }}
                    >{`${item.certificate_level}`}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>)}
        </Page>
      </Document>
    </PDFViewer>
  );
};
// ReactPDF.render()
export default ViewCV;
