import React from "react";
import "./form.css"
import SignupForm from "../SignupForm/signupform";

function Form() {
    return (  
<div class="container">
<div class="row">
  <div class="col-lg-10 col-xl-9 mx-auto">
    <div class="card card-signin flex-row my-5">
      <div class="card-img-left d-none d-md-flex">
      </div>
      <div class="card-body">
       <SignupForm></SignupForm>
      </div>
    </div>
  </div>
</div>
</div>
);
}

export default Form;