import "./Footer.scss"

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
    return (
        <div className="Footer">
            <div className="main">
                <div className="container">
                    <div className="header">ABOUT</div>
                    <ul>
                        <li>Our mission</li>
                        <li>Terms</li>
                        <li>CopyRight</li>
                    </ul>
                </div>
                <div className="container">
                    <div className="header">FAQ</div>
                    <ul>
                        <li>Rules</li>
                        <li>Tickets</li>
                        <li>Editions</li>
                        <li>Contribute</li>
                    </ul>
                </div>
                <div className="container">
                    <div className="header">EVENTS</div>
                    <ul>
                        <li>Star Gazing</li>
                        <li>Desert Mania</li>
                        <li>Dunes Madness</li>
                        <li>Spooky Land</li>
                    </ul>
                </div>
                <div className="container">
                    <div className="header">CONTACT US </div>
                    <ul>
                        <li>hello@example.com</li>
                        <li>(909) 323-322</li>
                        <li>(405) 123-321</li>
                    </ul>
                </div>
                <div className="container">
                    <div className="header">FALLOW US</div>
                        <div className="contactIcon">
                            <TwitterIcon/>
                            <FacebookIcon/>
                            <InstagramIcon/>
                        </div>
                </div>

            </div>
            <div className="endSection">
                <div className="Copyright">
                Copyright © Night Trips 2019. All rights reserved.
                </div>
                <div className="logo">
                    NT.
                </div>
            </div>
        </div>
    )
}

export default Footer
