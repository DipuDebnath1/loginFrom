import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";



const auth = getAuth(app)
const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showPassword , setShowPassWord ] = useState(false)
    // setErrorMessage('')





    const handleRegister = (e) =>{
        e.preventDefault()
        setErrorMessage('')
        setSuccessMessage('')
        const name = e.target.name.value;
        const password = e.target.password.value;
        const email = e.target.email.value;
        const checked = e.target.check.checked;
        console.log(email,password,checked);

        if (!/[A-Z]/.test(password)) {
            setErrorMessage("please enter strong password");
            return
        }
        else if(!checked){
            setErrorMessage('before aqceft our all condition')
            return
        }

        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user = result.user

                // email varification 
            sendEmailVerification(auth.currentUser)
            .then(()=>{
                alert('vafivation mail sent your email');
            })
            .catch((error)=>{
                console.log(error.message);
            })
            // name, 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')
            // profile update 
            updateProfile(auth.currentUser,{
                displayName:name, photoURL:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            })
            .then(()=>{
                console.log('upadate your profile');
            })
            .catch((error)=>{
                console.log(error.message);
            })











            console.log(user);
            setSuccessMessage('Login Success...')
        })
        .catch((error)=>{
            setErrorMessage(error.message)
            console.log(error.message)
        })

        e.target.password.value=''
        e.target.email.value=''
      
    }


    return (
        <div className="w-1/4 mx-auto bg-green-300 p-10 rounded">
            <h2 className="text-center text-3xl pb-5">Register</h2>
            <form onSubmit={handleRegister} className="flex flex-col gap-5" action="">
            <input type="text" 
            name="name" required 
            placeholder="name here" 
            className="input input-bordered input-info w-full " />
            <input type="email" 
            name="email" required 
            placeholder="email here" 
            className="input input-bordered input-info w-full " />
            <div className="flex relative">
                <input type={showPassword ? `text` : `password`}
                name="password" required 
                placeholder="password here"
                className="input input-bordered input-info w-full " />
                {
                  !showPassword ?  <FaEye onClick={()=>setShowPassWord(!showPassword)} className="absolute right-2 top-3"></FaEye> :
                            <FaEyeSlash onClick={()=>setShowPassWord(!showPassword)} className="absolute right-2 top-2"></FaEyeSlash> 
                }
            
            </div>
            <div className="flex gap-2">
                <input name="checkbox" type="checkbox" id="check"/> 
                <label htmlFor="check">aqeceft our all condition !</label>
            </div>
           <input className="btn btn-primary"  
           type="submit" value="submit" id="" />
           {
            errorMessage && <div>
                <p  className="text-red-600">{errorMessage}!!!</p>
            </div>
           }
           {
            successMessage && <div>
                <p  className="text-green-600">{successMessage}</p>
            </div>
           }

            </form>

        </div>
    );
};

export default Register;