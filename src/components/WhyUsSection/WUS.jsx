import "./WUS.scss"
import image from "../../image/whyusimage.png"
const WUS = ({data}) => {
    return (
        <div className="WhyUsSection">
            <div className="title">
                {data.header}
            </div>
            <div className="bodySection">
                {data.body}
            </div>
            <div className="bottomSection">
                <div className="leftImage">
                    <img src={image} alt="test"/>
                </div>

                <div className="rightImageTitle">
                    {data.imageTitle}
                </div>
            </div>
        </div>
    )
}

export default WUS
