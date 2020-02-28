import React from "react";
import "./form.css"
import SignupForm from "../SignupForm";

function Form() {
    return (  
<div className="container">
<div className="row">
  <div className="col-lg-10 col-xl-9 mx-auto">
    <div className="card card-signin flex-row my-5">
      <div className="card-img-left d-none d-md-flex">
      </div>
      <div className="card-body">
       <SignupForm></SignupForm>
      </div>
    </div>
  </div>
</div>
</div>
);
}

export default Form;