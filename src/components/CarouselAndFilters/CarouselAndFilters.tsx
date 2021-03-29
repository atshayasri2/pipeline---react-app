import React from "react";
import "./CarouselAndFilters.css";

const imagesPath = [
  "https://cdn11.bigcommerce.com/s-zhuza/images/stencil/original/uploaded_images/hotel-room-resized.jpg?t=1552606132",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvogqpq5YIiUNbWPsVT6p4N-ChHVPpiM6S8Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW1Z7cIao8poU-BMihB68EIPMqVgo8wF0buA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Nv4OjUbWeXHzHm1PGHMNqEirO8WgUCPSJg&usqp=CAU",
];

export default class Content extends React.Component {
  state = {
    index: 0,
    imgList: [imagesPath[0], imagesPath[1], imagesPath[2], imagesPath[3]],
  };

  onclickForward = () => {
    if (this.state.index + 1 === this.state.imgList.length) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  };

  onClickBack = () => {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.imgList.length - 1,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  };

  render() {
    return (
      <div>
        <div className="top">
          <img
            src={this.state.imgList[this.state.index]}
            alt="gallery"
            // width="100%"
            height="625"
          />

          <div className="left">
            <p>
              <i className="fa fa-angle-left" onClick={this.onclickForward}></i>{" "}
            </p>
          </div>
          <div className="right">
            <p>
              <i className="fa fa-angle-right" onClick={this.onClickBack}></i>{" "}
            </p>
          </div>
          <div className="centered">
            <h1>FIND YOUR DREAM HOUSE</h1>
            <p>
              If you dream of designing a new home that takes full advantage of
            </p>
            <p>the unique geography and views of land that you love</p>
            <button id="center-btn1">OUR SERVICES</button>
            <button id="center-btn2">GET A QUOTE</button>
          </div>
          <div className="bottomMenu">
            <button className="btndown1">FIND YOUR PLACE</button>
            <button className="btndown2">OFFICE FOR RENT</button>
          </div>
        </div>

        <div className="optcont">
          <div className="main-cont">
            <div className="container1">
              <div className="column1">
                <button className="dropdown">
                  <span>All Location</span>
                  <span>
                    <i className="fa fa-caret-down"></i>
                  </span>
                </button>
                <div className="dropdown-content">
                  <li>Chennai</li>
                  <li>Mumbai</li>
                  <li>Bangalore</li>
                </div>
              </div>
              <div className="column1">
                <button className="dropdown">
                  <span>Sub Location</span>
                  <span>
                    <i className="fa fa-caret-down"></i>
                  </span>
                </button>
              </div>
              <div className="column1">
                <button className="dropdown">
                  <span>All Status</span>
                  <span>
                    <i className="fa fa-caret-down"></i>
                  </span>
                </button>
              </div>
              <div className="column1">
                <button className="dropdown">
                  <span>All Type</span>
                  <span>
                    <i className="fa fa-caret-down"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="container1">
              <div className="column1">
                <button className="dropdown">
                  <span>No.Bedroom</span>
                  <span>
                    <i className="fa fa-caret-down"></i>
                  </span>
                </button>
              </div>
              <div className="column1">
                <button className="dropdown">
                  <span>No.Bathroom</span>
                  <span>
                    <i className="fa fa-caret-down"></i>
                  </span>
                </button>
              </div>
              <div className="column1">
                <button className="dropdown">
                  <span>Area(sqft)</span>
                  <span>
                    <i className="fa fa-caret-down"></i>
                  </span>
                </button>
              </div>
              <div className="column1">
                <button className="dropdown">
                  <span>Max Price</span>
                  <span>
                    <i className="fa fa-caret-down"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="opt-btn">
            <p>SEARCH</p>
            <p>PROPERTY</p>
          </div>
        </div>
      </div>
    );
  }
}
