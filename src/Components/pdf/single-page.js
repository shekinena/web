import React, { useState } from "react";
import { Document, Page } from "react-pdf";
// import {Link} from 'react-router-dom'

 function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <main>
      <container >
        <div className='thesis-document'>
          <Document
            file={pdf}
            options={{ workerSrc: "/pdf.worker.js" }}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>

      </container>
      <container className='thesis-document'>
        <div >
          <h4 className= 'navigate-buttons-h4'>
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </h4>
        </div>
        <div className= 'navigate-buttons-div'>
          <button 
            className='button-animation thesis-navigate-button'
            type="button"
            disabled={pageNumber <= 1} onClick={previousPage}
          >
            Previous
          </button>
          <button
            className='button-animation thesis-navigate-button'
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </container>
      <container className='small-screen-thesis'>
        <img
          
          style={{
            width:'60vw',
            border:'1px solid #555'
          }}
          src="./corpus-cover.png"
          alt="thesis corpus cover">
        </img>
        <div style={{
          textAlign:'center'
        }}>
          <button className='button-animation' ><a href="./sample.pdf" download>Download</a></button>
        </div>

      </container>
    </main>
  );
}

export default SinglePage