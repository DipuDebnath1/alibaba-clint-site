import AllProduct from "../../components/AllProduct";
import Brands from "../../components/Brands";
import FindSupplyReginion from "../../components/FindSupplyReginion";
import Carousel from "../../components/carousel";
import PaymentMethods from "../paymentMethod/PaymentMethods";

const Home = () => {
    
    return (
        <div>
            <Carousel></Carousel>
            <Brands></Brands>
            <AllProduct></AllProduct>
            <FindSupplyReginion></FindSupplyReginion>
            <PaymentMethods></PaymentMethods>
        </div>
    );
};

export default Home;