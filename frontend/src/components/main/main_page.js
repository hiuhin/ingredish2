// src/components/main/main_page.js

import React from "react";
import './main.scss';
import background from "./background_video.mp4";


class MainPage extends React.Component {
  render() {
    return (
      <div>
          <video autoPlay muted loop className="background_video">
            <source src={background} type="video/mp4" />
          </video>

        <div className="main">
        <div>
          <footer className="footer">Copyright &copy; 2020 ingredish</footer>
        </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
