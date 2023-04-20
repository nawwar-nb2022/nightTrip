import image from "../../image/per.jpg";
import "./AboutImage.scss";
const AboutImage = ({data , ActiveFunc ,active}) => {
    const activateFunc = ()=>{
        ActiveFunc(data.id)
    }
    return (
        <div className="AboutImage" onClick={activateFunc}>
           
            <img src={image} alt="" className={(active===data.id)?"active":""}/>
       { active === data.id &&
        <p className="info">
             <span>{data.name} </span>
             <span className="buttonColor"> {data.title}</span>
        </p>

       }

        </div>
    )
}

export default AboutImage
