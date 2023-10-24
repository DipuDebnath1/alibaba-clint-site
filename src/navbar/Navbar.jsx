import { Link, NavLink } from "react-router-dom";
import { AiOutlineAlibaba ,AiOutlineUserDelete } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)

    return (
        <div className="navbar bg-base-100 md:w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm space-y-4 text-lg text-start dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/addproduct'}>Add Product</NavLink>
                        <NavLink to={'/mycart'}>My Cart</NavLink>
                    </ul>
                </div>
                <div>
                    <Link className="flex items-center text-orange-500" to={'/'}>
                        <AiOutlineAlibaba className="text-4xl md:text-6xl"></AiOutlineAlibaba>
                        <h2 className=" md:text-xl ">Alibaba.com</h2>
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4 text-lg" >
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/addproduct'}>Add Product</NavLink>
                    <NavLink to={'/mycart'}>My Cart</NavLink>
                </ul>
            </div>
            <div className="navbar-end text-lg space-x-2" >
                <div>
                    {
                        user ? <div className="flex items-center gap-2">

                            <h2  className="hidden sm:inline-block text-sm">{user?.displayName}</h2>
                            {
                                user?.photoURL ?<img className="w-10 h-10 rounded-full object-cover
                                " src={user?.photoURL} alt="user" /> :
                                <AiOutlineUserDelete className="text-4xl border border-gray-400 rounded-full" />
                            }
                            
                        
                        </div> : ''
                    }
                </div>
                {
                    user ? <button onClick={LogOut} className="btn btn-sm md:btn-md btn-primary bg-orange-400 hover:bg-orange-500 border-none text-white">SignOut</button> : <button className="btn btn-sm md:btn-md btn-primary bg-orange-400 hover:bg-orange-500 border-none text-white"><Link to={'/login'}>SignIn</Link></button>
                }

            </div>
        </div>
    );
};

export default Navbar;