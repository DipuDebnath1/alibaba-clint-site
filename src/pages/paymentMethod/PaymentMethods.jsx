
const PaymentMethods = () => {
    
    return (
        <div className='w-11/12 mx-auto py-10 font-semibold'>
            <h2 data-aos="fade-up" className="text-4xl text-center py-10">Payment Method</h2>
            <div  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-x-40 gap-10">
                <figure>
                    <img data-aos="fade-up" src="https://i.ibb.co/VtvtKF4/download.jpg" alt="stripe" />
                </figure>
                <figure>
                    <img data-aos="fade-up" src="https://i.ibb.co/ZMVFjFJ/images.png" alt="visa" />
                </figure>
                <figure>
                    <img data-aos="fade-up" src="https://i.ibb.co/19SdZng/download.png" alt="paypal" />
                </figure>
                <figure>
                    <img data-aos="fade-up" src="https://i.ibb.co/bddbqYm/download.png" alt="google pay" />
                </figure>
                <figure>
                    <img data-aos="fade-up" src="https://i.ibb.co/9pGzCGh/download.png" alt="mastercard" />
                </figure>
                <figure>
                    <img data-aos="fade-up" src="https://i.ibb.co/dbB5JTk/download.png" alt="2checkout" />
                </figure>
                <figure>
                    <img data-aos="fade-up" src="https://i.ibb.co/ZHbVS97/images.png" alt="criptocurency" />
                </figure>
                <figure>
                    <img data-aos="fade-up" src="https://i.ibb.co/GTntQKs/download.png" alt="paytm" />
                </figure>
            </div>
            
        </div>
    );
};

export default PaymentMethods;