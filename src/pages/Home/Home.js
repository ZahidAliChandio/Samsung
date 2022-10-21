import { Fragment } from "react";
import Slider from "../../components/Slider";
import Appliances from './Appliances'
import SliderImage_1 from '../../images/slider-image_1.jpg';
import SliderImage_2 from '../../images/slider-image_2.jpg';
import SliderImage_3 from '../../images/slider-image_3.jpg';
import SliderImage_4 from '../../images/slider-image_4.jpg';

const Home = () => {
  const images = [
    {SliderImage_1},
    {SliderImage_2},
    {SliderImage_3},
    {SliderImage_4},
  ];
  return (
    <Fragment>
      {/* <img src={SliderImage_1} alt="" className="set-width"/> */}
      <Slider images={images}/>
      <Appliances/>
    </Fragment>
  );
};
export default Home;
