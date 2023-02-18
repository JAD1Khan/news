import React from 'react'
 import './vendor/bootstrap/css/bootstrap.min.css'
 import './fonts/font-awesome-4.7.0/css/font-awesome.min.css'
 import './vendor/animate/animate.css'
 import './vendor/css-hamburgers/hamburgers.min.css'
 import './vendor/select2/select2.min.css'
 import './vendor/select2/select2.min.css'
 import './css/util.css'
 import './css/main.css'
 import './ForgetPassword.css'
import image1 from './images/img-01.png'
import { Link } from 'react-router-dom'
function ForgetPassword() {
  return (<>
    <div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100 ForgetPassword-container">
      

            <form class="login100-form validate-form">
                <span class="login100-form-title title-ForgetPassword">
ایمیل خود را وارد کنید                </span>

                <div class="wrap-input100 ForgetPassword-input validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <input class="input100" type="text" name="email" placeholder="ایمیل"/>
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </div>

           
                
                <div class="container-login100-form-btn">
                    <button class="login100-form-btn">
                        تایید
                    </button>
                </div>

            
              
            </form>
        </div>
    </div>
</div>




<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<script src="vendor/bootstrap/js/popper.js"></script>
<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<script src="vendor/select2/select2.min.js"></script>


<script src="js/main.js"></script>
</>
  )
}

export default ForgetPassword