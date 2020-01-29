import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
  return (
    <footer className="footer" id="footer">
        <div className="footer-bottom">
            <div className="container">
                <div className="flex-container">
                    <div className="flex-item">
                        <h1 className="author-name">
                            <img src="https://em.wattpad.com/ee0a2f6d0d2b7cb0fbc92a234082c87d9ad1a3c8/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f724d78414c53566d4d5a552d64513d3d2d3537303930333931352e313533346338353264326130333034393234363939363934363534352e6a7067" alt=""></img>
                            <p>Узельман Владислав</p>
                        </h1>
                    </div>
                   
                </div>
            </div>
        </div>
    </footer>

  );
};
}

export default Footer;
