import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
  <div>
    <div>
      <img src = "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"></img>
    </div>
    <div className = {s.descriptionBlock}>
      ava + description
    </div>
  </div>
  )
}

export default ProfileInfo;
