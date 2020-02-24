import React from "react";

function SignupForm() {
    return (
        <div>
        <h5 class="card-title text-center">Register</h5>
        <form class="form-signin">
            <div class="form-label-group">
                    <input type="text" id="inputFirstName" class="form-control" />
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
            <div class="form-label-group">
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required />
                <label for="inputEmail">Email address</label>
            </div>
            <div class="form-label-group">
                <input type="text" id="inputZipCode" class="form-control"  />
                <label for="inputZipCode">Zip Code</label>
            </div>
            
            <hr></hr>

            <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                <label for="inputPassword">Password</label>
            </div>

            <div class="form-label-group">
                <input type="password" id="inputConfirmPassword" class="form-control" placeholder="Password" required />
                <label for="inputConfirmPassword">Confirm password</label>
            </div>

            <button id = 'registerBtn' class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
            <a class="d-block text-center mt-2 small" href="http://localhost:3000/login">Sign In</a> 
            <hr class="my-4"></hr>
            <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign up with Google</button>
            <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign up with Facebook</button>
        </form>
        </div>
);
}

export default SignupForm;