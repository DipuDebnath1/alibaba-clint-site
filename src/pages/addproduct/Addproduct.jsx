import toast, { Toaster } from "react-hot-toast";

const Addproduct = () => {

    const handleAddProduct = e => {
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
        //send data in serverSite
        fetch('https://apple-server-site.vercel.app/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                data.acknowledged ? toast.success(`Product added successfully`) : ''

            })

        form.reset()
    }

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <form data-aos="zoom-in" onSubmit={handleAddProduct} className="card-body text-xl  bg-orange-100 md:w-11/12 mx-auto rounded my-5 md:my-10">
                <p className="text-center text-2xl font-semibold">Add Your Product</p>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Link</span>
                        </label>
                        <input type="text" name="image" placeholder="image Link" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>

                        <select name="brand" id="" className="select select-bordered" defaultValue={'select brand'}>
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
                        <select name="type" id="" className="select select-bordered" defaultValue={'select brand'}>
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
                        <input type="number" min={1} name="price" placeholder="product price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Description</span>
                        </label>
                        <input type="text" name="description" placeholder="product description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Rating</span>
                        </label>
                        <input min={1} max={5} type="number" name="rating" placeholder="product rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Made By country</span>
                        </label>
                        <input type="text" name="made" placeholder="product made by" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary md:btn-lg bg-orange-400 hover:bg-orange-500  border-orange-500 hover:border-orange-500  border text-white">Add Product</button>

                </div>

            </form>
        </div>
    );
};

export default Addproduct;