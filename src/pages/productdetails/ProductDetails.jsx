import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

const ProductDetails = () => {
    const { id } = useParams()
    const loadAllProducts = useLoaderData()
    const product = loadAllProducts.find(productData => productData._id == id)

    const handleAddCart = () => {

        fetch('https://apple-server-site.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)

        })
            .then(res => res.json())
            .then(data => data.acknowledged ? toast.success(`Product added to cart`) :
                toast.error(`Product already  added !!
                                        Please select another Product `)
            )

    }

    return (
        <div data-aos="zoom-in" className="md:w-2/3 lg:w-1/3 bg-gray-50 p-10 rounded-xl mx-auto my-10 space-y-3 text-lg">
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <img className="mx-auto " src={product.image} alt={product.name} />
            <div className="flex justify-center text-orange-600">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <div className="flex justify-between">

                <h2 className="text-xl font-semibold">{product.name}</h2>
                <h2 className="font-semibold">Price: ${product.price}</h2>
            </div>
            <h2 style={{ textTransform: 'capitalize' }} className="font-semibold">Brand : {product.brand}</h2>

            <p className="font-semibold">Made: {product.made}</p>
            <p className="flex-grow">{product.description}</p>
            <div className="flex gap-3">
                <button onClick={handleAddCart} to={`/product/${product._id}`} className="py-2 rounded-l flex-1 text-center border bg-orange-400 hover:bg-orange-500 text-white">Add Cart</button>
                <Link  className="py-2 rounded-l flex-1 text-center border bg-orange-400 hover:bg-orange-500 text-white" to={`/update/${product._id}`}>Update</Link>
            </div>
        </div>
    );
};

export default ProductDetails;