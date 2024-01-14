import { Link } from "react-router-dom";
import gif from "../../../public/assets/image/signup.gif";

const Signup = () => {
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
        <form className="space-y-12">
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
