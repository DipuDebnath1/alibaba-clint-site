import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const Update = () => {
    const product = useLoaderData()

    const handleUpdateProduct = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const made = form.made.value;
        const productInfo = { image, name, brand, type, price, description, rating, made }

        fetch(`https://apple-server-site.vercel.app/update/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                data.modifiedCount > 0 && toast.success(`Product update success !!`)
                // form.reset()
                form.name.value=''
                form.image.value=''
                form.brand.value=''
                form.type.value=''
                form.price.value=''
                form.description.value=''
                form.rating.value=''
                form.made.value=''
            })

    }

    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <form data-aos="zoom-in" onSubmit={handleUpdateProduct} className="card-body text-xl  bg-orange-100 md:w-11/12 mx-auto rounded my-5 md:my-10">
                <p className="text-center text-2xl font-semibold">Update Your Product</p>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Link</span>
                        </label>
                        <input defaultValue={product.image} type="text" name="image" placeholder="image Link" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input defaultValue={product.name} type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>

                        <select defaultValue={product.brand} name="brand" id="" className="select select-bordered">
                            <option value="apple">apple</option>
                            <option value="samsung">samsung</option>
                            <option value="walton">walton</option>
                            <option value="huawei">huawei</option>
                            <option value="hp">hp</option>
                            <option value="asus">asus</option>
                        </select>
                        {/* <input type="text" name="brand" placeholder="Brand" className="input input-bordered" required /> */}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product type</span>
                        </label>
                        <select defaultValue={product.type} name="type" id="" className="select select-bordered" >
                            <option value="mobile">mobile</option>
                            <option value="tablet">tablet</option>
                            <option value="watch">watch</option>
                            <option value="laptop">laptop</option>
                            <option value="headphone">headphone</option>
                            <option value="mouse">mouse</option>
                            <option value="keybord">keybord</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <input defaultValue={product.price} type="number" min={1} name="price" placeholder="product price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Description</span>
                        </label>
                        <input defaultValue={product.description} type="text" name="description" placeholder="product description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Rating</span>
                        </label>
                        <input defaultValue={product.rating} min={1} max={5} type="number" name="rating" placeholder="product rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Made By country</span>
                        </label>
                        <input defaultValue={product.made} type="text" name="made" placeholder="product made by" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary border md:btn-lg bg-orange-400 hover:bg-orange-500 border-orange-500 hover:border-orange-500 text-white">Update Product</button>
                </div>

            </form>
        </div>
    );
};

export default Update;