import { Fragment } from "react";
import Slider from "../../components/UI/Slider";
import Appliances from "./Appliances";
import SliderImage_1 from "../../images/bag_slider_image.jpg";
import SliderImage_2 from "../../images/laptop_slider.jpg";
import SliderImage_3 from "../../images/cricket.jpg";
import SliderImage_4 from "../../images/washing_machine_slider.jpg";

const Home = () => {
  const images = [SliderImage_1, SliderImage_2, SliderImage_3, SliderImage_4];
  return (
    <Fragment>
      <Slider images={images} />
      <Appliances />
    </Fragment>
  );
};
export default Home;
