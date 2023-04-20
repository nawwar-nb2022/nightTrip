import "./WhyUs.scss";
import WhyUsData from "../../data/whyUs";
import WUS from "../WhyUsSection/WUS";


const WhyUs = () => {
    return (
        <div className="WhyUs">
            <div className="mainContainer">
                <div className="title">
                    <p className="h1">People’s thoughts</p>
                    <p>SEE WHAT ARE OTHERS SAYING</p>
                </div>

                <div className="body">
                   { WhyUsData.map((data , rowId) =>{
                        return(
                            <WUS data={data} key={rowId} />
                        )
                   })} 
                </div>

                <div className="bottom">
                    <p className="h2">See you soon!</p>
                    <p className="h6">We hope to meet each other <br/> very soon.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
