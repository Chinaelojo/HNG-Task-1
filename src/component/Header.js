import React from 'react';
import icon from "../images/Icon.svg";
import personImage from "../images/profile__img.png";
import avatar from "../images/_Avatar share button.svg";

const Header = () => {
  return (
    <div>
        <img class="arrow" src={icon} alt="" className='nextIcon'/>
        <img src={avatar} alt="" className='avatar'/>

        <div className="header">
           <img src={personImage} alt="" id='profile_img'/>
           <h3 className='anne'><strong>Annette Black</strong></h3>
        </div>
      
    </div>
  )
}

export default Header