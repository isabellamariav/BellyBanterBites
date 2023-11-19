const SignIn = () => {
   return (

        <div class="card w-96 bg-base-100 shadow-xl mt-16 mx-auto">
            <div class="card-body">
                <h2 class="card-title">Please sign up</h2>
                <p>Sign me up for ...</p>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>


                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Sign me up</button>
                </div>
            </div>
        </div>
          );
};

export default SignIn;