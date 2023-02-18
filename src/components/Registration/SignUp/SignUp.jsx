import React from "react";
import { Link } from "react-router-dom";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./vendor/animate/animate.css";
import "./vendor/css-hamburgers/hamburgers.min.css";
import "./vendor/select2/select2.min.css";
import "./vendor/select2/select2.min.css";
import "./css/util.css";
import "./css/main.css";
import "./SignUp.css";
import image1 from "./images/img-01.png";
function SignUp() {
  return (
    <>
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <form class="login100-form validate-form signUp-form">
              <span class="login100-form-title">ثبت نام کنید</span>

              <div
                class="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  class="input100"
                  type="text"
                  placeholder="نام"
                />
                <span class="focus-input100"></span>
                
              </div>
              <div
                class="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  class="input100"
                  type="text"
                  placeholder=" نام خانوادگی"
                />
                <span class="focus-input100"></span>
               
              </div>
              <div
                class="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  class="input100"
                  type="text"
                  name="email"
                  placeholder="ایمیل"
                />
                <span class="focus-input100"></span>
              
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  class="input100"
                  type="password"
                  name="pass"
                  placeholder="رمزعبور"
                />
                <span class="focus-input100"></span>
              
              </div>
              <div
                class="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  class="input100"
                  type="password"
                  name="pass"
                  placeholder="تکرار رمز"
                />
                <span class="focus-input100"></span>
               
              </div>

              <div class="container-login100-form-btn">
                <button class="login100-form-btn">ثبت نام</button>
              </div>

              <div class="text-center p-t-12">
                {/* <span class="txt1">
                        Forgot
                    </span> */}
                <a class="txt2" href="#">
                   
                </a>
              </div>

              <div class="text-center p-t-136 before-create-account">
                <Link to='../Login' class="txt2 create-acc" href="#">
                 
                  قبلا حساب ساخته اید؟ ورود
                </Link>
              </div>
            </form>
            <div class="login100-pic js-tilt" data-tilt>
              <img src={image1} alt="IMG" />
            </div>
          </div>
        </div>
      </div>

      <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
      <script src="vendor/bootstrap/js/popper.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
      <script src="vendor/select2/select2.min.js"></script>

      <script src="js/main.js"></script>
    </>
  );
}

export default SignUp;
