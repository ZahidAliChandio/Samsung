import SimpleImageSlider from "react-simple-image-slider";
import "./Slider.css";

const Slider = (props) => {
  const images = [{ url: "../images/slider_image_1.jpg" }];
  return (
    // <div id="slider">
    //   <SimpleImageSlider
    //     width={"100%"}
    //     height={590}
    //     images={images}
    //     showBullets={true}
    //     showNavs={true}
    //     loop={true}
    //     autoPlay={true}
    //     autoPlayDelay={1}
    //     bgColor={"black"}
    //   />
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      {/* </div> */}
    </div>
  );
};
export default Slider;
