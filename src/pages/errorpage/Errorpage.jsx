import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="space-y-4 my-20">
            <h2 className="text-red-500 text-center text-5xl font-bold">404</h2>
            <p className="text-center text-xl">Location not found!!!</p>
          <div className="text-center">
          <Link className="btn text-white bg-orange-400 hover:bg-orange-500 " to={'/'}>Go Home</Link>
          </div>
        </div>
    );
};

export default ErrorPage;