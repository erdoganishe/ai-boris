import React from 'react'
import './ProfileImage.css'

const ProfileImage = (props) => {
  return (
    <div className = 'profile-image-container'>
      <img className = 'profile-image' src = {props.isBoris ? "Static/boris.png" : "Static/user.png"}></img>
      </div>
  )
}

export default ProfileImage