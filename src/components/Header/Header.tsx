import React from "react";
import "./Header.css";

class Header extends React.Component {
  state = {
    active: false,
  };
  showMenus() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  render() {
    return (
      <div className="HeaderDiv">
        <div className="header1">
          <div className="topnav navbar1">
            <div>
              <span>
                <i>Open Hours Monday to Saturday - 8am to 6pm</i>
              </span>
            </div>
            <div className="nav-right">
              <div className="navbar-options">
                <div className="column2">
                  <button className="dropdown d1">
                    <span>
                      <i className="fa fa-flag">&nbsp;</i>
                    </span>
                    <span> Currency : USD &nbsp;</span>
                    <span>
                      <i className="fa fa-caret-down"></i>
                    </span>
                  </button>
                </div>
                <div className="column2">
                  <button className="dropdown d1">
                    <span>
                      <i className="fa fa-globe">&nbsp;</i>
                    </span>
                    <span> Language : ENG &nbsp;</span>
                    <span>
                      <i className="fa fa-caret-down"></i>
                    </span>
                  </button>
                </div>
              </div>
              <button className="list-prop-btn">
                LIST YOUR PROPERTY FOR FREE
              </button>
            </div>
          </div>
        </div>
        <div className="header2">
          <div className="topnav navbar2">
            <div>
              <img
                src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png"
                alt="logo"
                width="50"
              />
            </div>
            <div
              className={
                this.state.active ? "navbar2-sub responsive" : "navbar2-sub"
              }
            >
              <div className="nav2-links">
                <a href="#home">HOME</a>
                <a href="#listing">LISTING</a>
                <a href="#property">PROPERTY</a>
                <a href="#gallery">GALLERY</a>
                <a href="#page">PAGE</a>
                <a href="#blog">BLOG</a>
                <a href="#contact">CONTACT</a>
              </div>

              <a href="#menu" className="icon">
                <i
                  className="fa fa-bars"
                  onClick={() => {
                    this.showMenus();
                  }}
                ></i>
              </a>
            </div>
            <div className="contact">
              <span>
                <i className="fa fa-mobile">&nbsp;</i>{" "}
              </span>
              <p> CALL US NOW</p>
              <p id="phone"> 111&nbsp;222&nbsp;333&nbsp;444&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
