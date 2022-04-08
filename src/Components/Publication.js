import React from 'react';
import { useEffect, useState } from "react";

const Publication = () => {
  const [title] = useState('Shekine | Publication');

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);

    return (
      <main style={{textAlign:'center',
                    display:'block',
                    justifyContent:'space-around'
                  }}>
          <h1 style={{paddingTop:'50px', fontSize: '1rem'}}>Page Under Construction</h1>
          <div style={{maxWidth:'80vw', margin:'0 auto'}}>
          <img 
            src='./backround.jpg'
            alt='backround'
            style={{width:'100%',
                    }}
          >

          </img>
          </div>

      </main>
    )
  }
  
  export default Publication