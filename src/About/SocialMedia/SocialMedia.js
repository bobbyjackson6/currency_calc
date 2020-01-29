import React, { Component } from "react";
import "./SocialMedia.css";

class SocialMedia extends Component {
  sm = [
    {
      logo: "http://pngimg.com/uploads/vkontakte/vkontakte_PNG27.png",
      link: "https://vk.com/vladuhsalov"
    },
    {
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/5/5c/Telegram_Messenger.png",
      link: "https://t.me/uzelmanvv"
    },
    {
      logo:
        "https://www.freepnglogos.com/uploads/instagram-logos-png-images-free-download-2.png",
      link: "http://instagram.com/vlaluvizzy"
    }
  ];

  render() {
    let listOfKeys = () =>{
      return(((Object.keys(this.sm))))
    }

    let listSocialMedias = this.sm.map((number,index) => (
      <li key={listOfKeys()[index]} >
        <a href={number.link} target="_blank" rel="noopener noreferrer">
          <img src={number.logo} alt=""></img>
        </a>
      </li>
    ));
    return <ul className="socialMedia">{listSocialMedias}</ul>;
  }
}

export default SocialMedia;
