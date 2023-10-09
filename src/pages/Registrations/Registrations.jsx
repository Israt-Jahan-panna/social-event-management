import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { FaEye , FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import auth from "../../FireBase/firebase.config";
import swal from 'sweetalert';

const Register = () => {
  const [registerError, setRegisterError] = useState('');
  const [sucess, setSucess] = useState('');
  const [passwordShow , setPasswordShow ] = useState(false)
  const handelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    console.log(email, password , name);

    if(password.length <6 ){
        setRegisterError('Enter At Least 6 Character Password');
        return;
    }
    else if( !/[A-z]/ .test(password)){
        setRegisterError('you should enter a capital letter')
        return;
    }
    else if( !/[@$!%*?&]/ .test(password)){
        setRegisterError('you should enter a Special Charecter ')
        return;
    }
    

    setRegisterError('');
    setSucess('');


    //create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((results) => {
        const user = results.user;
        setSucess(" Your Account Create SuccessFully ");
        

        //update profile 
        updateProfile(user,{
            displayName: name,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
        .then( () => console.log('profile updated'))
        .catch(error => {
            console.log(error.message)
        })

        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  
  };
  return (
    <div className="mx-auto mb-16 ">
      <div className="mx-auto md:w-1/2 mt-7 mb-2">
        <h3 className="text-3xl mb-4 pt-2 text-center text-red-300 font-bold">Please Register and Create Account</h3>
        <form onSubmit={handelSubmit}>
            <input
              className="mb-4 w-full  py-1 px-4"
              type="text"
              name="name"
              id=""
              placeholder="Your Name"
            />
          <input
            className="mb-4 w-full  py-1 px-4"
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
          />
          <br />
          <div className=" relative">
          <input
            className="mb-4 w-full py-1 px-4"
            type={passwordShow ? "text" : "password"}
            name="password"
            id=""
            placeholder=" Password"
          />
          <span className="absolute right-2 top-2 text-xl " onClick={() => setPasswordShow (!passwordShow)}>
            {
                passwordShow ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }
          </span>
          </div >
          
          <br />
        <button  className="mb-4 w-full bg-red-600  rounded-lg py-2  px-4"
            type="submit"
            value="Register">
            Registration </button>
        </form>
      </div>
      <div className="mx-auto w-1/4">
      {sucess && <p className="text-blue-400  mb-6">{sucess}</p>}
      {registerError && (
        <p className="text-red-400  mb-6">{registerError}</p>
      )}
      <p>Already Have An Account ? <Link className="underline" to={'/login'}> Goto Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
