import { Fragment } from "react";
import Slider from "../../components/Slider";
import Appliances from "./Appliances";
import SliderImage_1 from "../../images/mobiles.jpg";
import SliderImage_2 from "../../images/galaxy_mobile.jpg";
import SliderImage_3 from "../../images/slider-image_3.jpg";
import SliderImage_4 from "../../images/slider-image_4.jpg";

const Home = () => {
  const images = [{ url: "../../images/slider_image_1.jpg" }];
  return (
    <Fragment>
      {/* <img src={SliderImage_1} alt="" className="set-width"/> */}
      <Slider images={images} />
      <Appliances />
    </Fragment>
  );
};
export default Home;
