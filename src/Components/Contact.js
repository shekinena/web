import React from 'react'
import { useEffect, useState } from "react";
import { TextField,} from '@mui/material';
import { Button } from '@mui/material';
import { green } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#000000"
    },
    secondary: {
      // This is green.A700 as hex.
      main: green[500]
    }
  }
});

const Contact = () => {
  const [title] = useState('Shekine | Contact');

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);

  return (
    <main style={{textAlign:'center'}}>
      <div className='about-wide-cover'>
        <img className='about-wide-image' src='./mali-aigas-wide.jpg' alt='goat hair'></img>
      </div>

      <div style={{width:'30vw', margin:'0 auto'}}>
        <h1 style={{marginTop:'25px',
                    textAlign:'center',
                    borderBottom:'1px solid #E8E8E8',
                    width:'100%', marginLeft:'auto',
                    marginRight:'auto',
                    fontSize: 'clamp(0.5rem, 0.5rem + 2vw  , 3rem)'
                    }}
                    
        >Contact Form</h1>
      </div>
      
      <div className='contact-form'>
        <ThemeProvider theme={theme}>
          <form
                style={{margin:'25px 85px 75px 100px'}} >
            <div className="input-div">
              <TextField sx={{ input: { color: 'black' } }} className='contact-fields' id="outlined-basic" label="Name" variant="outlined" />
            </div>
            <div className="input-div">
              <TextField color = 'primary' className='contact-fields' id="outlined-basic" label="E-mail" variant="outlined" />
            </div>
            <div className="input-div">       
              <TextField style={{color:'black'}} className='contact-fields'
                id="filled-multiline-static"
                label="Message"
                multiline
                rows={5}
                // defaultValue="Default Value"
                variant="outlined"
              />
            </div>
            <div style={{margin: '0 auto'}}>
              <Button disabled style={{width:'100px', color:'black', border:'1px solid black', borderRadius:'5px'}} variant="outlined">SEND</Button>
            </div>
            
          </form>
      
        </ThemeProvider>
      </div>
      
    </main>
  )
}

export default Contact