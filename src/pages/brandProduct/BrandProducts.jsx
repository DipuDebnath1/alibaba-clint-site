import { AiFillStar } from "react-icons/ai";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const BrandProducts = () => {
    const { id } = useParams()
    const loadProducts = useLoaderData()
    const filterProducts = loadProducts.filter(data => data.brand == id)
      
      const slideImages = [
        {
            url: 'https://i.ibb.co/8Prsfnp/Acer-discount-offer-page-1696232742.jpg',
            caption: 'Slide 1'
          },
        {
            url: 'https://i.ibb.co/bmdT8SM/Sales-Storm-Top-Brand-Mobile-Phone-discount.png',
            caption: 'Slide 2'
          },
        {
          url: 'https://i.ibb.co/hMrVD6h/947-CEC8-C-C44-F-4-B81-A54-F-D1-E54-C7-B07-F0.webp',
          caption: 'Slide 3'
        },
      ];
      



    return (
        <div className="w-11/12 mx-auto md:my-10">
          

          <div data-aos="fade-up" className="slide-container">
        <Fade>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div  className="h-[60vh]">
                <img className="w-full h-full" src={slideImage.url} alt="" />
              </div>
            </div>
          ))} 
        </Fade>
      </div>






      {/* data-aos="zoom-in"  */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5">
                {
                    filterProducts?.map(product => <div  className="space-y-2 p-5 flex flex-col"  key={product._id}>
                       
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
                        <h2 className="font-semibold">type:{product.type}</h2>
                        <p className="flex-grow">{product.description.length > 150 ? <span>{product.description.slice(0, 100)}<Link to={`/product/${product._id}`} className="font-semibold text-blue-700"> see more...</Link></span> : product.description}</p>
                        <div className="flex gap-3 justify-between ">
                            <Link to={`/product/${product._id}`} className="py-2 text-center rounded-l flex-1  bg-orange-400 hover:bg-orange-500 text-white">Details</Link>

                            <Link to={`/update/${product._id}`} className="py-2 rounded-r flex-1 text-center bg-orange-400 hover:bg-orange-500 text-white">Update</Link>
                        </div>
                       
                        

                    </div>)
                }
            </div>
        </div>
    );
};


export default BrandProducts;