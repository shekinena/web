import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Missing from './Components/Missing';
import About from './Components/About'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Thesis from './Components/Thesis'
import Publication from './Components/Publication'
import Contact from './Components/Contact'
import ResponsiveAppBar from './Components/ResponciveAppBar'

ReactDOM.render(
  <React.StrictMode>
    <Router basename='/web'>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="home" element={< Home />} />
        <Route path="about" element={<About />} />
        <Route path="thesis" element={<Thesis />} />
        <Route path="publications" element={<Publication />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Missing />} status={404} />
      </Routes>
      <Footer />
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

