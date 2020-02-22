import React from "react";
import "../index.css";
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import Wrapper from "../components/Wrapper/wrapper"


function Login() {

  return (
    <Wrapper>
      <Header></Header>
    <div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card card-signin flex-row my-5">
          <div class="card-img-left d-none d-md-flex">
          </div>
          <div class="card-body">
            <h5 class="card-title text-center">Login</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input type="text" id="inputUserame" class="form-control" placeholder="Username" required autofocus />
                <label for="inputUserame">Username</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                <label for="inputPassword">Password</label>
              </div>
             
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign In</button>
              <a class="d-block text-center mt-2 small" href="/signup">Sign Up</a>
             </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
  </Wrapper>

  );
}

export default Login;
