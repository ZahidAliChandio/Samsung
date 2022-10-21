import {Fragment} from 'react'
import SimpleImageSlider from 'react-simple-image-slider';
import './Slider.css'

const Slider=(props)=>{
    return(
        <div id="slider">
            <SimpleImageSlider
            width={"100%"}
            height={590}
            images={props.images}
            showBullets={true}
            showNavs={true}
            loop={true}
            autoPlay={true}
            autoPlayDelay={1}
            bgColor={"black"}
            />
            <img src={props.images[0]} alt="" className="set-width"/>
        </div>
    )
}
export default Slider;