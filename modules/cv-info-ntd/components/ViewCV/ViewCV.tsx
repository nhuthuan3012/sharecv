"use client";
import React from "react";
import ReactPDF, {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  Font,
  PDFViewer,
} from "@react-pdf/renderer";
import { Box, Typography } from "@mui/material";
import { ViewHeadline } from "@mui/icons-material";
// Create styles
Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  body: {
    gap:20,
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
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
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
});

// Create Document Component
const ViewCV = () => (
  // <Box   width={"500px"} height={"1200px"} sx={{}}>
  <PDFViewer showToolbar={false} width={"80%"} height={"1200px"}>
    <Document style={{width: "100%", height: "1200px" }}>
      <Page size="A4" style={styles.body}>
        <View style={styles.pageBackground}>
          <Image style={{ display: "flex" }} src="/Logo.png" />
        </View>

        <View
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
              width: "20%",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Image style={{ display: "flex" }} src="/Logo.png" />
          </View>
          <View
            style={{
              display: "flex",
              width: "80%",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "orange" }}>aaaaaaaa</Text>
            <Text style={{ color: "orange" }}>BBBBBBBB</Text>
          </View>
        </View>
        <View
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
              width: "20%",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Image style={{ display: "flex" }} src="/Logo.png" />
          </View>
          <View
            style={{
              display: "flex",
              width: "80%",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "orange" }}>aaaaaaaa</Text>
            <Text style={{ color: "orange" }}>BBBBBBBB</Text>
          </View>
        </View>
        <View
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
              width: "20%",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Image style={{ display: "flex" }} src="/Logo.png" />
          </View>
          <View
            style={{
              display: "flex",
              width: "80%",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "orange" }}>aaaaaaaa</Text>
            <Text style={{ color: "orange" }}>BBBBBBBB</Text>
          </View>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);
// ReactPDF.render()
export default ViewCV;
