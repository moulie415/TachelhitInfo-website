import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import { Document, Page } from "react-pdf";

const AllPages: FunctionalComponent<{pdf: string}> = ({ pdf }) => {
  const [numPages, setNumPages] = useState(0);

  function onDocumentLoadSuccess({ numPages: num }: { numPages: number}) {
    setNumPages(num);
  }


  return (
    <Document
      file={pdf}
      options={{ workerSrc: "pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
};

export default AllPages;