import React from 'react';
import ComplaintD from './Complaint';
import NavbarBase from './NavbarBase';
import Footer from './footer';

export const Complaint = ({data, deleteComplaint}) => {
    return (
        <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
         <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      <div id="home">
      <NavbarBase />
      <div id="krunal">
      <div className="container h-100" />
      <div className="d-flex justify-content-center h-100" />
        <div className="d-flex justify-content-center form_container">
            <div className="row my-3">
                <div className="col-lg">
                    {data.map((val)=>{
                        return <ComplaintD data={val} deleteComplaint={deleteComplaint}/>
                    })}
                </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
        </>
    )
}
export default Complaint;
