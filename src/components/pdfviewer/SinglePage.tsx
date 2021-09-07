import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import { Document, Page } from "react-pdf";

const SinglePage: FunctionalComponent<{pdf: string}> = ({ pdf }) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1); // setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages: num }: { numPages: number }) {
    setNumPages(num);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }


  return (
    <div>
      <div style={{height: '60vh', overflowY: 'scroll'}}>
        <Document
          file={pdf}
          options={{ workerSrc: "pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
    
      </div>
        <div style={{position: 'absolte', bottom: 0}}>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
        <input
          type="number"
          id="pages input"
          name="pages input"
          style={{marginLeft: 10, width: 150}}
          placeholder="Enter page number"
          min="1"
          max={numPages}
          onChange={e => {
            // @ts-ignore
            if (e.target.value) {
              // @ts-ignore
              setPageNumber(Number(e.target.value));
            }
          }}
        />
      </div>
     </div>
  );
};

export default SinglePage;