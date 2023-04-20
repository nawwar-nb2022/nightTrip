import"./Hero.scss"
import SearchIcon from '@mui/icons-material/Search';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Hero = () => {
    return (
        <div className="Hero">
            <div className="top">
                <div className="left">NT.</div>
                <div className="right">
                    <span className="search">
                        <SearchIcon style={{fontSize : "30px"}}/>
                    </span>
                    <button className="menu">
                        Menu
                    </button>
                </div>
            </div>
            <div className="body">
                <div className="title">
                Night Trips
                </div>
                <div className="subTitle">
                WE GOT TRIPS FOR THE TRIPPSTER IN YOU
                </div>
                <div className="contain">
                Neque, eros commodo, nascetur ullamcorper vitae. Tincidunt ut venenatis, volutpat lorem ut faucibus mauris, quisque. Integer gravida sed quis congue. Vel risus, arcu a viverra leo id pulvinar ultricies. Enim in in in pulvinar nulla sollicitudin. Ullamcorper.
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                SCROLL
                </div>
                <div className="right">
                    <TwitterIcon/>
                    <FacebookIcon/>
                    <InstagramIcon/>
                </div>
            </div>
        </div>
    )
}

export default Hero
