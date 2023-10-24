import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";


const AllProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://apple-server-site.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data.length > 12 ? data.slice(0, 12) : data))
    }, [])


    return (
        <div className="w-11/12 mx-auto ">
            <h2 className="text-4xl font-semibold text-center py-5" data-aos="fade-up">Products</h2>
            <div className=" my-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {
                    products.map(product => <div data-aos="fade-up" className="space-y-2 p-5 flex flex-col" key={product._id}>
                        <img className="h-40 mx-auto" src={product.image} alt={product.name} />
                        <div className="flex justify-center text-orange-600">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <div className="flex justify-between">

                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <h2 className="font-semibold">Price: ${product.price}</h2>
                        </div>
                        <h2 className="font-semibold">type: {product.type}</h2>
                        <h2 style={{ textTransform: 'capitalize' }} className="font-semibold">Brand: {product.brand}</h2>
                        <p className="flex-grow">{product.description.length > 150 ? <span>{product.description.slice(0, 100)}<Link to={`/product/${product._id}`} className="font-semibold text-blue-700"> see more...</Link></span> : product.description}</p>
                        <div className="flex">
                            <Link to={`/product/${product._id}`} className="py-2 border text-center rounded flex-1  bg-orange-400 hover:bg-orange-500 text-white">Details</Link>
                            
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllProduct;