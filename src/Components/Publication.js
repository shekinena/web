import React from 'react';
import { useEffect, useState } from "react";

const Publication = () => {
  const [title] = useState('Shekine | Publication');

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);

    return (
      <main style={{display:'flex',
                    justifyContent:'space-around'
                  }}>
          <h1 style={{position:'absolute', paddingTop:'50px'}}>Page Under Construction</h1>
          <img 
            src='./backround.jpg'
            alt='backround'
            style={{width:'80vw',
                    }}
          >

          </img>
      </main>
    )
  }
  
  export default Publication