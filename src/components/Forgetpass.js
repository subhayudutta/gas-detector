import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import { Link,useNavigate } from "react-router-dom";


function Forgetpass(){
    const history = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(auth,emalVal).then(data=>{
            alert("Check your gmail")
            history("/")
        }).catch(err=>{
            alert(err.code)
        })
    }
    return(
        <>
<section data-bs-version="5.1" class="form7 cid-tP3djVxmct" id="form7-h">

    
<div class="container-fluid">
    <div class="mbr-section-head">
        <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
            <strong>Reset Password</strong></h3>
        
    </div>
    <div class="row justify-content-center mt-4">
        <div class="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
            <form action="#" method="POST" class="mbr-form form-with-styler mx-auto" data-form-title="Form Name" onSubmit={handleSubmit}><input type="hidden" name="email" data-form-email="true" value="BfcJ2ZuFnKbIMEBmXg35gOX3ru0yyryykJXglOInmPc4WS98jVD9JdZ0q/0r7BTE87YKG2kn6xfGATjcfPeqhCgBzlfVXxWUZM5aV1QCaE79BU/hlE0G4qQrjhPa9/Km" />
                <p class="mbr-text mbr-fonts-style align-center mb-4 display-7">A password reset link will be sent to your registered email.</p>
                
                <div class="dragArea row">
                    <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="name">
                        <input type="text" name="name" placeholder="Username" data-form-field="name" class="form-control"  id="name-form7-h"/>
                    </div>
                    
                    
                    <div class="jj"><p><Link to="/login">Login</Link></p><p><Link to="/signup">Create a new Account</Link></p></div>
                    <div class="col-auto mbr-section-btn align-center"><button type="submit" class="btn btn-primary display-4">Reset Now </button></div>
                    {/* <div class="col-auto mbr-section-btn align-center"><button onClick={handleGoogleSignIn} class="btn btn-primary display-4"><span class="socicon socicon-google mbr-iconfont mbr-iconfont-btn"></span>Login with Gmail&nbsp;</button></div> */}
                </div>
            </form>
        </div>
    </div>
</div>
</section>

    </>
    )
}
export default Forgetpass;