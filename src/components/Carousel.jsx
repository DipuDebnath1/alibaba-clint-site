
const Carousel = () => {


    return (
            <div>
            <div className="carousel w-full" data-aos="fade-up">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/LkfpgXx/laptop-bannner.jpg" className="w-full h-[40vh] md:h-[70vh] object-cover" />
                </div>

                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/ss1CJht/12ce299313163f40c0ac9b66db93ef58.jpg" className="w-full h-[40vh] md:h-[70vh] object-cover" />
                </div>

               
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/QHSTmwx/P25-banner.jpg" className="w-full h-[40vh] md:h-[70vh] object-cover" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://i.ibb.co/8gqW5Nw/pr-apple-watch-banner.png" className="w-full h-[40vh] md:h-[70vh] object-cover" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Carousel;