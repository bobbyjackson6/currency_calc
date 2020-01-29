import React, { Component } from "react";
import "./Cookie.css";

class Cookie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    };
  }
  vanishHandler = e => {
    this.setState({ display: "none" });
  };
  render() {
    const style = { display: this.state.display };
    return (
      <div className="cookie" style={ style }>
        На нашем сайте мы используем cookie для сборов информации технического
        характера.
        <br />В частности, для персонифицированной работы сайта мы обрабатываем
        IP-адрес регион вашего местоположения.&nbsp;
        <button
          className="btn btn-primary btn-sm"
          onClick={e => this.vanishHandler()}
        >
          OK
        </button>
      </div>
    );
  }
}

export default Cookie;
