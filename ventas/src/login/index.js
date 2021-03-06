import React, { useState } from 'react'
import './login.css'
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

   const [loginEmail, setLoginEmail] = useState("");
   const [loginPassword, setLoginPassword] = useState("");

    const handleClick = () => {
        console.log('this is:', this);
        
      }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword (
               auth,
               loginEmail,
               loginPassword
            );
            console.log(user);
            window.location = '/usuario';
        } catch (error) {
            console.log(error.message);
        }       
      }

    return (
        <div className='cuerpo'>
        <div className="container">
        <div className="row">
			<div className="col-md-5 mx-auto">
			<div id="first">
				<div className="myform form ">
					 <div className="logo mb-3">
						 <div className="col-md-12 text-center">
							<h1>Login</h1>
						 </div>
					</div>
                           <div className="form-group">
                              <label className='mb-1' htmlFor="exampleInputEmail1">Email address</label>
                              <input 
                                 type="email" 
                                 name="email" 
                                 className="form-control" 
                                 id="email" 
                                 aria-describedby="emailHelp" 
                                 placeholder="Enter email" 
                                 onChange={(event) => {
                                    setLoginEmail(event.target.value);
                                 }}
                                 /> 
                           </div>
                           <div className="form-group">
                              <label className='mt-3 mb-1 ' htmlFor="exampleInputEmail1">Password</label>
                              <input 
                                 type="password" 
                                 name="password" 
                                 id="password"  
                                 className="form-control" 
                                 aria-describedby="emailHelp" 
                                 placeholder="Enter Password" 
                                 onChange={(event) => {
                                    setLoginPassword(event.target.value);
                                 }}
                                 />
                           </div>
                           <div className="form-group">
                              <p className="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
                           </div>
                           <div className="col-md-12 text-center ">
                              <button onClick={login}  type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                             

                           </div>
                           <div className="col-md-12 ">
                              <div className="login-or">
                                 <hr className="hr-or" />
                                 <span className="span-or">or</span>
                              </div>
                           </div>
                           <div className="col-md-12 mb-3">
                              <p className="text-center">
                                 <a href="javascript:void();" className="google btn mybtn"><i className="fa fa-google-plus">
                                 </i> Iniciar con Google
                                 </a>
                              </p>
                           </div>
                           <div className="form-group">
                              <p className="text-center">Don't have account? <a href="#" id="signup">Sign up here</a></p>
                           </div>
                 
				</div>
			</div>
			 {/*  <div id="second">
			      <div className="myform form ">
                        <div className="logo mb-3">
                           <div className="col-md-12 text-center">
                              <h1 >Signup</h1>
                           </div>
                        </div>
                        <form action="#" name="registration">
                           <div className="form-group">
                              <label for="exampleInputEmail1">First Name</label>
                              <input type="text"  name="firstname" className="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter Firstname">
                           </div>
                           <div className="form-group">
                              <label for="exampleInputEmail1">Last Name</label>
                              <input type="text"  name="lastname" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter Lastname">
                           </div>
                           <div className="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email" name="email"  className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                           </div>
                           <div className="form-group">
                              <label for="exampleInputEmail1">Password</label>
                              <input type="password" name="password" id="password"  className="form-control" aria-describedby="emailHelp" placeholder="Enter Password">
                           </div>
                           <div className="col-md-12 text-center mb-3">
                              <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Get Started For Free</button>
                           </div>
                           <div className="col-md-12 ">
                              <div className="form-group">
                                 <p className="text-center"><a href="#" id="signin">Already have an account?</a></p>
                              </div>
                           </div>
                            </div>
                        </form>
                     </div> */}
	   		</div>
		</div>
      </div>   
        </div>
    )
}

export default Login