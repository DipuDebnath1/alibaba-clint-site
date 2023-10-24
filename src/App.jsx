
// import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
// ..
AOS.init();



function App() {

  const {loading} = useContext(AuthContext)

  if(loading){
   return <div className="text-center py-20">
              <span className="loading loading-bars loading-xs"></span>
              <span className="loading loading-bars loading-sm"></span>
              <span className="loading loading-bars loading-md"></span>
              <span className="loading loading-bars loading-lg"></span>
          </div>
  }

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
       
    </>
  )
}

export default App
