import React, { Component } from "react";
import "./About.css";
import SocialMedia from "./SocialMedia/SocialMedia";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: "",
      link: ""
    };
    this.sm = [
      {
        logo: "https://vk.com/images/brand/vk-logo--fb.png",
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
        link: "@vlaluvizzy"
      }
    ];
  }
  render() {
    return (
      <div className="about">
        <ul className="lessons">
          Добро пожаловать на мой простенький проект по React. Здесь
          Использовались такие аспекты React'а, как:
          <li>Классы</li>
          <li>Компоненты</li>
          <li>Props and State</li>
          <li>Работа с формами</li>
          <li>Жизненный цикл компонента</li>
          <li>Routing</li>


          <p>Я надеюсь, что у вас сложется положительное
          впечатление об этом проекте. Я всегда готов к критике, вопросам и
          предложениям.</p>
        </ul>
        <div className="myContacts">
          Ниже вы можете выбрать любой из удобных для вас способов связаться со
          мной.
                <SocialMedia />

        </div>
      </div>
    );
  }
}

export default About;
