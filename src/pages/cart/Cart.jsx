import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const Cart = () => {

    const loadProduct = useLoaderData()
    const [products, setProducts] = useState(loadProduct)

    const handleDeleteCart = (id) => {
        fetch(`https://apple-server-site.vercel.app/cart/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Product deleted success`)
                    const filter = products.filter(data => data._id !== id)
                    setProducts(filter);
                }
            }



            )
    }


    return (
        <div className="w-11/12 mx-auto my-10">
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {
                    products?.map(product => <div data-aos="fade-up" className="space-y-2  p-5 flex flex-col" key={product._id}>
                        <img className="h-40 mx-auto " src={product.image} alt={product.name} />
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
                        <h2 style={{ textTransform: 'capitalize' }} className="font-semibold">Brand: {product.brand}</h2>
                        <p className="flex-grow">{product.description}</p>
                        <div className="flex justify-between gap-3">
                            <button onClick={() => handleDeleteCart(product._id)} to={`/product/${product._id}`} className="py-2 text-center rounded-l flex-1  bg-orange-400 hover:bg-orange-500 text-white">Delete</button>
                            <Link to={`/update/${product._id}`} className="py-2 rounded-r flex-1 text-center bg-orange-400 hover:bg-orange-500 text-white">Update</Link>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;