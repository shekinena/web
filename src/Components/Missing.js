import React from 'react';

const Missing = () => {
    return (
      <main >
        <div style={{textAlign:'center', marginTop: '8%'}}>
          <h1>Page Not Found 404</h1>
          <a href='/'>Return Home</a>
        </div>

        <video muted className='backround-image'>
          <source src="./back.mp4" type="video/mp4"></source>
        </video>
       </main>
    )
  }
  
  export default Missing