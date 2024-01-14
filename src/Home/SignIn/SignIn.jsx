import { Link, useNavigate } from "react-router-dom";
import gif from '../../../public/assets/image/signin.gif'
import { useContext, useState } from "react";
import { AuthContext } from "../../../public/Provider/AuthProvider";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../../public/firebase/firebase.config";
import Swal from "sweetalert2";

const SignIn = () => {

    const {signInUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const auth = getAuth(app);
    // const googleProvider = new GoogleAuthProvider();
  
    const [signinError, setSigninError] = useState("");
    const [succes, setSucces] = useState("");
    const [user , setUser] = useState(null)

    const handleSignin = (e) => {
        e.preventDefault();
    
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    
        signInUser(email,password)
        .then(result =>{
          console.log(result);
        })
        .catch(error =>{
          console.error(error)
        })
    
        //    reset error
        setSigninError("");
        setSucces("");
    
        if (password.length < 6) {
          setSigninError("password is less than 8 characters");
          return;
        } else if (!/[A-Z]/.test(password)) {
          setSigninError("password do not have a capital letter");
          return;
        }
    
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
            setSucces();
            Swal.fire({
              title: "Wonderfull!!",
              text: "You're logged in successfully",
              icon: "success",
            });
            navigate('/')
          })
          .catch((error) => {
            console.log(error);
            setSigninError(error.message);
          });
        }
    
    return (
        <div className="flex flex-1 justify-around bg-white">
        <div className="w-86 mt-20">
          <img src={gif} alt="" />
        </div>
  
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  w-1/2">
          <div className="mb-8 text-center">
            <p className="text-sm lg:text-2xl text-[#AD6A34] font-serif">
              Sign Up to access your account
            </p>
          </div>
          <form onSubmit={handleSignin} className="space-y-12">
            <div className="space-y-4">
             
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
                  Sign In
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

export default SignIn;