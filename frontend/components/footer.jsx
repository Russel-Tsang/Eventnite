import React from 'react';

class Footer extends React.Component {
    
    render() {
        return (
            <footer>
                <div className="footer-left">
                    &copy;2019 Eventnite
                </div>
                <div className="footer-middle">
                    <ul>
                        <li>About</li>
                        <li>Blog</li> 
                        <li>Help</li> 
                        <li>Careers</li> 
                        <li>Press</li> 
                        <li>Investors</li> 
                        <li>Security</li> 
                        <li>Developers</li> 
                        <li>Terms</li> 
                        <li>Privacy</li> 
                        <li>Cookies</li> 
                    </ul>
                </div>
                <div className="footer-right">
                    United States
                </div>
            </footer>
        )
    }
}

export default Footer;