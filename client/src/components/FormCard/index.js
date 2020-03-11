import React from "react";
import "./form.css";

function MainCard(props) {

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9 mx-auto">
          <div className="card card-signin flex-row my-5">
            <div className="card-img d-none d-md-flex">
              <div className="card-img-profile d-none d-md-flex"></div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">{props.headertext}</h5>
              <div>{props.form}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
