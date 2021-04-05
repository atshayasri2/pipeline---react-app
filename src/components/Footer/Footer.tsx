import React from 'react';
import './Footer.css';

class Footer extends React.Component{
  render(){
    return (
        <div>
        <div className="footer">
        <div className="overlay">
        <h1>Download Our LatestApp</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ducimus cumque neque porro, quisquam </p>
        <p>consectetur eos, sint dicta velit iusto officiis</p>
        <div className="flex5">
        <div className="fit">
        <img src="https://logos-download.com/wp-content/uploads/2016/06/Download_on_the_App_Store_logo.png" alt="AppStoreLogo" /></div>
        <div className="fit">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png" alt="PlayStoreLogo" />
              </div>
  
    
        </div>
        </div>
        </div>
      </div>
    
        
  );
}
}

export default Footer;