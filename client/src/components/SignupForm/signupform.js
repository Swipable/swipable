import React from "react";
import "../Form/form.css"

function SignupForm() {
    return (
        <div>
        <h5 className="card-title text-center">Register</h5>
        <form className="form-signin">
            <div className="form-label-group">
                    <input type="text" id="inputFirstName" className="form-control" />
                    <label for="inputFirstName">First Name</label>
                </div>
            <div class="form-label-group">
                <input type="text" id="inputLastName" class="form-control"  />
                <label for="inputLastName">Last Name</label>
            </div>
            <div class="form-label-group">
                <input type="text" id="inputUsername" class="form-control" placeholder="Username" required autofocus />
                <label for="inputUsername">Username</label>
            </div>
            <div className="form-label-group">
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                <label for="inputEmail">Email address</label>
            </div>
            <div className="form-label-group">
                <input type="text" id="inputZipCode" className="form-control"  />
                <label for="inputZipCode">Zip Code</label>
            </div>
            
            <hr></hr>

            <div className="form-label-group">
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <label for="inputPassword">Password</label>
            </div>

            <div className="form-label-group">
                <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Password" required />
                <label for="inputConfirmPassword">Confirm password</label>
            </div>

            <button id = 'registerBtn' className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
            <a className="d-block text-center mt-2 small" href="/login">Sign In</a> 
            <hr className="my-4"></hr>
            <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign up with Google</button>
            <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign up with Facebook</button>

        </form>
        </div>
);
}

export default SignupForm;