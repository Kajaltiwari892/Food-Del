import React from 'react'
import "../../styles/AppDownload.css";
import { assets } from '../../assets/assets';
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Bettter Experience Download <br /> Tomato App</p>
      <div className='app-download-platforms'>
 <img src={assets.play_store} alt="" />
 <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload