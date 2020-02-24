import React from "react";
import "../components/Form/form.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Wrapper from "../components/Wrapper/wrapper";

function Profile() {
  return (
    <Wrapper>
      <Header></Header>
      <div className="container">
      <div className="row">
        <div className="col-lg-9 mx-auto">
          <div className="card card-signin flex-row my-5">
            <div className="card-img d-none d-md-flex">
                <div className="card-img-profile d-none d-md-flex">
              
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Profile</h5>
              {/* <div className="col-md-4 col-lg-4" align="center"><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeAsIELBimVGoQSn3Ht_eU6V164uIBSUzQWe9zjc9G3FuyWQCQhg&s"
                className="img-circle" alt="team" 
                // style="padding-top: 5px; padding-right:35px;  width:280px;height:280px;" 
                />
              </div> */}
              <table className="table">
                <tbody>
                  <tr>
                    <td className="entry">First Name:</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="entry">Last Name:</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="entry">Mobile Number:</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="entry">First Name:</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="entry">Last Name:</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="entry">Mobile Number:</td>
                    <td></td>
                  </tr>
                </tbody>
               <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Edit</button>
              </table>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer></Footer>
    </Wrapper>
  );
}

export default Profile;

