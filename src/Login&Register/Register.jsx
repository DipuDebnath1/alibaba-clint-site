import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
    const { Register, UserUpdate } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleRegisterForm = (e) => {
        e.preventDefault()
        const form = e.target;
        const password = form.password.value;
        const email = form.email.value;
        const name = form.name.value;
        const image = form.image.value;

        if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            toast.error(`password is weak!
            password length minimum 6 !
            shuld be used spacial caracter, number,
            capital & small letter  `,
            {
                duration: 3000,
            }
            )
            return
        }

        Register(email, password)
            .then(() => {
                // profile update 
                
                UserUpdate(name,image)
                .then(()=>{
                    
                })
                .catch(()=>{
                    
                })
                form.reset()
                navigate( location.state ? location.state : '/')
                
            })
            .catch((error) => {
                toast.error(`${error.message}`,
                {
                    duration: 3000,
                }
                )
            })

        // console.log(email, password,image,name);
    }

    return (
        <div className=" md:w-2/3 xl-1/2 mx-auto bg-orange-100 my-10 rounded-lg">
            {/* react toast */}
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            {/* form */}
            <form onSubmit={handleRegisterForm} className="card-body text-xl">
                <p className="text-center text-2xl font-semibold">Sign Up</p>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name <span className="text-red-500">*</span></span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email <span className="text-red-500">*</span></span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image Link</span>
                    </label>
                    <input type="text" name="image" placeholder="Image Link" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password <span className="text-red-500">*</span></span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary bg-orange-400 hover:bg-orange-500 border-none text-white">Sign In</button>
                    <p className="text-sm"> have an account ? please <Link to={'/login'} className="font-semibold text-blue-800">SignIn</Link> </p>
                </div>
            </form>
        </div>
    );
};

export default Register;