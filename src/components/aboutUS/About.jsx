import "./About.scss";
import AboutSection from "../../data/Ab";
import AboutImage from "../AboutImage/AboutImage";
import { useState } from "react";
import Dots from "../../image/DotsAbout.png"
const About = () => {

    const [active , setActive ] = useState(0)
    const ActiveFunc  = (val)=>{    
            setActive(val)
            console.log(val)
    }
    return (
        <div className="About">
            <div className="left">
                <div className="title">
                    About Us
                </div>
                <div className="Text">
                    <p className="whiteText">
                    We’re a team of four passioned people.
                    </p>
                    <p className="grayText">
                    We’re ready to take the world by storm and 
                    let you find new travel opportunities.
                    </p>
                    <p className="grayText">
                    Our everyday task is to make sure that you satisfied with the services and products that we provide. 
                    </p>
                </div>

                <button>
                    READ MORE ABOUT US
                </button>
            </div>
            <div className="right">
                <div className="imageWrapper">
                    <img src={Dots} alt="" className="sideDots"/>
                    {AboutSection.map((data, rowId)=>{
                        return (
                            <AboutImage data={data} key={rowId} ActiveFunc={ActiveFunc} active={active}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default About