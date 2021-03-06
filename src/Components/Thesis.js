import React from 'react';
import { useEffect, useState } from "react";
import SinglePage from './pdf/single-page';
import samplePDF from '../Components/pdf/sample.pdf'

const Thesis = () => {
  const [title] = useState('Shekine | Thesis');

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);

    return (
      <main style={{display:'flex',
                      justifyContent:'space-around',
                      zIndex: '-1'
                    }}>
        <SinglePage pdf={samplePDF} />
      </main>
    )
  }
  
  export default Thesis