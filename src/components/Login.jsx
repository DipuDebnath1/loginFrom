import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword,   } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useRef, useState } from "react";
import Swal from "sweetalert2";



const auth = getAuth(app)

const Login = () => {
    const emailRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState('')

const handleLogIn = (e) =>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
 
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
        const user = result.user
        console.log(user);
       
        Swal.fire({
            icon: 'success',
            title: 'Login Success' ,

            
          })
    })
    .catch((error=>{
        console.log(error.message);
        setErrorMessage('invalid password Email!!!')
    }))


    // console.log(email,password);
}


const handleResetPassword=() =>{
    const email = emailRef.current.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email) {
        console.log('please provide your email');
        return
    }
    else if(!emailPattern.test(email)){
        console.log('please enter valid email');
        return
    }


    sendPasswordResetEmail(auth,email )
    .then(()=>{
        console.log('password rest email sent');
    })
    .then((error)=>{
        console.log(error.message);
    })
    
} 



    return (
        <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
        <form onSubmit={handleLogIn} action="">
                 <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" 
                    name="email" placeholder="email" 
                    ref={emailRef}
                    className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                    
                    <label className="label">
                        <a onClick={handleResetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                        {
                        errorMessage && <p className="text-red-600">{errorMessage}</p>
                    }
                    <button className="btn btn-primary">Login</button>
                    </div>
            </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;