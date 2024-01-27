"use client";

import { useCallback, useEffect, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import "./PdfViewer.css";

import type { PDFDocumentProxy } from "pdfjs-dist";
import axios from "axios";
import { API_URL } from "@/config/_constant";
import { stringify } from "querystring";
import https from "https";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const resizeObserverOptions = {};

const maxWidth = 800;

type PDFFile = string | File | null;

interface PdfViewerProps {
  link: string;
}
export default function PdfViewer({ link }: PdfViewerProps) {
  const [file, setFile] = useState<PDFFile>("/Resume-KieuKhanhQuan.pdf");

  const [numPages, setNumPages] = useState<number>();
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  const axiosClient = axios.create({
    baseURL: API_URL,
    headers: {
      "ngrok-skip-browser-warning": "69420",
      "Content-Type": "application/json",
    },
    // timeout: 0,
    paramsSerializer: {
      serialize: (params) => stringify(params),
    },
    validateStatus: (status) => {
      const strStatus = status.toString();

      return strStatus.startsWith("2") || strStatus === "404";
    },
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });
  useEffect(() => {
    console.log("link",link)
    axiosClient.get(link);
    if (link != null) {
      setFile(link);
    }
    // axios({
    //   url: link, //your url
    //   method: "GET",
    //   responseType: "blob",
    //   headers: {
    //     "ngrok-skip-browser-warning": "69420",
    //     "Content-Type": "application/json",
    //   }, // important
    // }).then((response) => {
    //   // create file link in browser's memory
    //   const href = URL.createObjectURL(response.data);
    //   console.log(href);
    //   setFile(href);
    // });
  }, [link]);
  return (
    <div className="Example" style={{ width: "100%" }}>
      <div className="Example__container">
        <div className="Example__container__document" ref={setContainerRef}>
          <Document
            className="border-primary border-2"
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={
                  containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
                }
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
