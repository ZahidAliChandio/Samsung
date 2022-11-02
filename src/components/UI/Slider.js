import SimpleImageSlider from "react-simple-image-slider";
import "./Slider.css";

const Slider = (props) => {
  const images = props.images;
  return (
    <div id="slider">
      <SimpleImageSlider
        width={"100%"}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
        loop={true}
        autoPlay={true}
        autoPlayDelay={5}
      />
      <div className="content absolute left-1/2 top-1/2 -translate-x-2/4 transform:translate(50%,50%)">
        <h2>{props.title}</h2>
        <p>{props.description}</p>        
      </div>
    </div>
  );
};
export default Slider;
