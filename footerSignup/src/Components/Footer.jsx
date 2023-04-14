import React from 'react';

// import FooterCSS from '../Styles/Footer.module.css'; 
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
// import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"

import FooterCSS from '../Styles/Footer.module.css'; 


// import FaceBook from  '../assets/facebook'; 
// import {FaInstagram, FaTwitter} from "react-icons/fa";

// import { MdFacebook } from 'react-icons/md'; 

// import { FaYoutube } from 'react-icons/fa';

// import Ministry from '../Ministry';


// import KidsMinistry from './KidsMinistry';
// import Volunteering from './Volunteering';
// import About from '../About';

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";


function Footer() {
  
  // Add in the UseState Hook here 
  const [hover, setHover] = useState(false);
  
  const handleMouseEnter = () => {
    
    setHover(true); 

  }
  
  const handleMouseLeave = () => {
  
    setHover(false); 

  }

  
  
  return (
  <footer className={FooterCSS.footer}> 
  
  <div className={FooterCSS.contentContainer}>

    <article className={FooterCSS.section}>
    
    {/* Add in the logo container here  */}
    
   {/* Add in the social media list container here  */}
   <div className={FooterCSS.socialMediaListContainer}>
    
   <div className={FooterCSS.logoContainer}>
    
    {/* Add in the logo here    */}
    <h2 className={FooterCSS.logo} >Logo</h2>
        
        
    </div>
    {/* Add in the social media list here  */}
    <ul className={FooterCSS.socialMediaList}>
    
    {/* Add in the first list item here  */}
    <li className={FooterCSS.socialMediaListItem}>
    {/* Add in the social media icon here  */}
    FacebookIcon    
    
    
    </li>
    <li className={FooterCSS.socialMediaListItem}>
    {/* Add in the social media icon here  */}
    FacebookIcon    
    
    
    </li>
    <li className={FooterCSS.socialMediaListItem}>
    {/* Add in the social media icon here  */}
    FacebookIcon    
    
    
    </li>
        
    </ul>
    
   </div>
    
    <section className={FooterCSS.listContainer}>
   
    </section>    
    </article>
    
  
    
    <article className={FooterCSS.section}> 

      
      <div className={FooterCSS.headlineContainer}> 
      <h1 className={FooterCSS.headline}>
      Contact Us 
      </h1>
      </div>
      
      <section className={FooterCSS.listContainer}>
      
      <ul className={FooterCSS.list}> 
        
    {/* Add in the email container here  */}
    <li className={FooterCSS.emailContainer} >
    <div className={FooterCSS.contactEmail}>
    contact@email.com
    
    </div>
        
    </li>
    
    {/* Add in the Address container here make sure to add a bit of top space between the two items  */}
    <li className={FooterCSS.addressContainer}>
    
    <div id={FooterCSS.addressId}  className={FooterCSS.addressContainer}>
    24 Avery Avenu, Brooklyn 
    
        
    </div>
   

    </li>
    <li className={FooterCSS.secondAddressLineItem}>
     <div className={FooterCSS.secondAddressLine}>
    Dreamy Drive         
    </div>

    </li>
    
    {/* Add in the phone number container here  */}
    <li className={FooterCSS.phoneNumberListItem}>
    <div className={FooterCSS.phoneNumber}>
        +35569784 
    </div>
    </li>
    
      </ul>

      </section>
    </article>
      
      
      
      {/* Put the third section in here  */}
      <article className={FooterCSS.section}> 
      {/* Put in the headline container here  */}
      <div className={FooterCSS.headlineContainer}> 
      
      <h1 className={FooterCSS.headline}>
      Outreach:
      </h1>
      </div>
      {/* Put the list container here  */}
      <section className={FooterCSS.listContainer}> 
      {/* Put the list here  */}
      
      <ul className={FooterCSS.list}>
      
        
      </ul>
      </section>
      </article>
  
  </div>
  
  {/* Put the social media section in here  */}
  <div className={FooterCSS.socialMediaSection}>
    <ul className={FooterCSS.socialMediaList}>
      <li> 
      <a href='#' alt="alt"> 
      </a>
      </li>
      
      
      <div className={FooterCSS.hoverEffectParentContainer}>
      <div id={FooterCSS.socialID} className={FooterCSS.hoverEffectContainer}>
      <li className={FooterCSS.socialMediaListItem}>
      
      
      
      
      <a href='https://www.instagram.com/'>
      
      {/* <FaInstagram id={FooterCSS.socialID}   className={FooterCSS.socialMediaLink}/>   */}
      </a>
      </li>
      
      <li className={FooterCSS.socialMediaListItem}> 
        <a className={FooterCSS.facebookLink} href='https://www.facebook.com/' alt="alt">
        
          {/* <MdFacebook id={FooterCSS.socialID} className={FooterCSS.socialMediaLink}  /> */}
        
          </a>
      </li>
      </div>
      </div>
      </ul>
      </div>
  
  </footer>
  );
}

export default Footer
