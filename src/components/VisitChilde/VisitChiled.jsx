import "./VisitChilde.scss";
import dots from "../../image/Dots.png";

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const VisitChilde = ({filteredView}) => {
    return (
        <div className="VisitChide">
            {/* {filteredView?.name} */}
            <div className="left">
                <div className="topLayer">
                    
                    <div className="image">
                        <img src={filteredView?.image} alt=""/>
                    </div>
                        <img src={dots} alt="" className="dots"/>


                    <div className="onImage">
                        {filteredView?.imageTitle}
                    </div>

                </div>  
            </div>
            <div className="right">
                <div className="container">

                    <div className="title">
                        {filteredView?.name}
                    </div>
                    <div className="body">
                        {filteredView?.body}
                    </div>
                    
                    <button>
                            SEE OUR LATEST OFFER 
                    </button>

                </div>
            </div>
        
            <div className="fixedBottom">
                <span> share : </span>
                <div className="icon">
                    <TwitterIcon/>
                    <FacebookIcon/>
                    <InstagramIcon/>
                </div>
            </div>
        </div>
    )
}

export default VisitChilde
