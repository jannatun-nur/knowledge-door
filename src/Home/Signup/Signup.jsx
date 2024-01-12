import gif from '../../../public/assets/image/signup.gif'

const Signup = () => {
    return (
        <div>
          <div className="">
  <div className="flex justify-between">
    <div className="w-1/2">
     <img className='w-5/12' src={gif} alt="" />
    </div>
    <div className="w-1/2">
      <form className="w-1/2">
        <div className="">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>  
        </div>
    );
};

export default Signup;