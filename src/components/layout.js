import React from 'react';
import Navbar from './navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';
// import '../sass/layout.scss';

const layout = ({ children }) => {
  return (  
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
 
export default layout;