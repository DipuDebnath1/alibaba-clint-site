import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="text-center py-20">
                    <span className="loading loading-bars loading-xs"></span>
                    <span className="loading loading-bars loading-sm"></span>
                    <span className="loading loading-bars loading-md"></span>
                    <span className="loading loading-bars loading-lg"></span>
                </div>
    }

    if(user) {
        return children
    }

    return <Navigate state={`${location.pathname}`} to={'/login'}></Navigate>



};

export default PrivetRoute;