import { Link } from "react-router-dom";
import gif from "../../../public/assets/image/signup.gif";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../../public/firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../../../public/Provider/AuthProvider";
import Swal from "sweetalert2";

const Signup = () => {

  const auth = getAuth(app);
    
  const {createUser}=useContext(AuthContext)
  
  
  const [signupError , setSignupError] = useState('')
  const [succes,  setSucces] = useState('')

  const handleSignUp = (e) =>{
    e.preventDefault();
    

    const name = e.target.name.value;
    const address = e.target.address.value
   const email = e.target.email.value;
   const password = e.target.password.value;
   console.log(name, address, email ,password);



   createUser(email, password)
   .then(result =>{
       console.log(result.user);
   })
   .catch( error =>{
       console.error(error)
   })
   
       //    reset error
       setSignupError('');
       setSucces('')
   
       if(password.length <6){
           setSignupError('password is less than 8 characters')
           return
       }
       else if(!/[A-Z]/.test(password)){
           setSignupError('password do not have capital letter ')
           return
       }
   
   
   createUserWithEmailAndPassword(auth, email, password)
   .then(result =>{
     console.log(result.user);
     setSucces()
     Swal.fire({
       position: "top-center",
       icon: "success",
       title: "You have created an account",
       showConfirmButton: false,
       timer: 1500
     });
   })
   .catch(error=>{
     console.log(error);
    setSignupError(error.message)
   })
  }
  return (
    <div className="flex flex-1 justify-around bg-white">
      <div className="w-64 mt-20">
        <img src={gif} alt="" />
      </div>

      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  w-1/2">
        <div className="mb-8 text-center">
          <p className="text-sm lg:text-2xl text-[#AD6A34] font-serif">
            Sign Up to access your account
          </p>
        </div>
        <form onSubmit={handleSignUp} className="space-y-12">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2 text-white font-semibold">
                <label className="text-sm text-white font-semibold">Name</label>
              </div>
              <input
                type="Username"
                name="Username"
                id="Username"
                placeholder="Username"
                className="w-full px-3 py-2 rounded-md bg-white border border-[#AD6A34] text-[#AD6A34] border-none"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2 text-white font-semibold">
                <label className="text-sm">Address</label>
              </div>
              <input
                type="address"
                name="address"
                id="address"
                placeholder="address"
                className="w-full px-3 py-2 rounded-md bg-white border-amber-700 text-[#AD6A34] border-none"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-white font-semibold">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="@gmail.com"
                className="w-full px-3 py-2 rounded-md bg-white border border-[#AD6A34] text-[#AD6A34] border-none"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2 text-white font-semibold">
                <label className="text-sm">Confirm Password</label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 rounded-md bg-white border border-[#AD6A34] text-[#AD6A34] border-none "
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-[#AD6A34] text-white font-serif"
              >
                Sign Up
              </button>
            </div>
            <p className="px-6 text-sm text-center text-[#AD6A34] font-serif">
              Already have accout?
              <Link to="/login">Login Here</Link>
            </p>
          </div>
        </form>
        {/* {
         signupError && <p className=" font-semibold text-red-500">{signupError}</p>
      }
      {
          succes && <p className="text-green-700  font-semibol">{succes}</p>
      } */}
      </div>
    </div>
  );
};

export default Signup;
