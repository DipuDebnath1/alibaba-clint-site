import { Link } from "react-router-dom";

const Brands = () => {
    return (
        <div className=" md:py-20 bg-gray-50">
            <h2 className="text-4xl text-center font-semibold my-5"
            data-aos="fade-up">Our Product Brands</h2>
            <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-10">
                <Link className="flex flex-col" to={'/brand/apple'} data-aos="fade-up">
                    <img className="w-8/12 flex-grow mx-auto" src="https://i.ibb.co/J2y6LhS/images.jpg" alt="apple" />
                    <h2 className="text-2xl font-semibold hover:underline text-center">APPLE</h2>
                    
                </Link>
                <Link className="flex flex-col" to={'/brand/samsung'} data-aos="fade-up">
                    <img className="w-8/12 flex-grow  mx-auto" src="https://i.ibb.co/WgTsH3f/images.png" alt="samsung" />
                    <h2 className="text-2xl font-semibold hover:underline text-center">SAMSUNG</h2>
                    
                </Link>
                <Link className="flex flex-col" to={'/brand/walton'} data-aos="fade-up">
                    <img className="w-8/12 flex-grow mx-auto" src="https://i.ibb.co/4ZyqDZj/download.png" alt="walton" />
                    <h2 className="text-2xl font-semibold hover:underline text-center">WALTON</h2>
                    
                </Link>
                <Link className="flex flex-col" to={'/brand/huawei'} data-aos="fade-up">
                    <img className="w-8/12 flex-grow  mx-auto
                    " src="https://i.ibb.co/p3vrYFg/download.jpg" alt="huawei" />
                    <h2 className="text-2xl font-semibold hover:underline text-center">HUAWEI</h2>
                </Link>
                <Link className="flex flex-col" to={'/brand/hp'} data-aos="fade-up">
                    <img className="w-8/12 flex-grow mx-auto" src="https://i.ibb.co/8DHcxpS/download.png" alt="hp" />
                    <h2 className="text-2xl font-semibold hover:underline text-center">HP</h2>
                    
                </Link>
                <Link className="flex flex-col" to={'/brand/asus'} data-aos="fade-up">
                    <img className="w-8/12 flex-grow mx-auto " src="https://i.ibb.co/BVCBFvw/download.png" alt="asus" />
                    <h2 className="text-2xl font-semibold hover:underline text-center">ASUS</h2>
                    
                </Link>
            </div>
        </div>

    );
};

export default Brands;