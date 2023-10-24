import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useLocation, useNavigate  } from 'react-router-dom';
import { AuthContext } from "../AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()


    const {LoginUser,googleLogin} = useContext(AuthContext)

    const handleLoginForm = (e)=>{
        e.preventDefault()
        const form = e.target;
        const password = form.password.value;
        const email = form.email.value;
        // console.log(email,password);
        LoginUser(email,password)
        .then(()=>{
            navigate( location.state ? location.state : '/')
            toast.success(`SignIn success`,
            {
                duration: 3000,
            }
            )
            form.password.value='',
            form.email.value=''
            
        })
        .catch(()=>{
            toast.error(`your password or email is incorrect!
            Try again letter`,
            {
                duration: 3000,
            }
            )
        })
    }

    const provider = new GoogleAuthProvider()
    const handleGoogleLogin = () =>{
        googleLogin(provider)
        .then(()=>{
            navigate( location.state ? location.state : '/')
            toast.success(`SignIn success`)
        })
        .catch(()=>{
            toast.error(`SignIn Failed!!`)
        })
    }

    return (
        <div className="w-full md:w-2/3 xl:w-1/2 mx-auto bg-orange-100 my-10 rounded-lg">
            {/* react toast */}
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <form onSubmit={handleLoginForm} className="card-body text-xl">
                <p className="text-center text-2xl font-semibold">Sign In</p>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary bg-orange-400 hover:bg-orange-500 border-none text-white">Sign In</button>
                    <p className="text-sm">{`Don't`} have an account ? please <Link to={'/register'} className="font-semibold text-blue-800">SignUp</Link> </p>
                    <p className="text-center">or </p>
                    <p className=" flex gap-5 items-center justify-center">Login with <FcGoogle onClick={handleGoogleLogin} className="text-4xl" ></FcGoogle></p>
                </div>
            </form>
        </div>
    );
};

export default Login;