import React, { Component, useEffect } from "react";
import {
  RouteComponentProps,
  RouteProps,
  useLocation,
  withRouter,
} from "react-router-dom";
import "./product.css";
interface Iprops extends RouteComponentProps {
  // name: string;
  // imgURL: string;
  // title: string;
  // location: string;
  // price: string;
  // type: string;
  // squarefeet: number;
  // noOfBeds: number;
  // noOfBaths: number;
  // taxiAvailability: string;
  // indexValue: number;
}
// interface IState {
//   detail: IRoomDetail;
// }
class Villa extends React.Component<Iprops & RouteProps> {
  // componentDidMount() {
  //   // const { handle } = this.props.match.params
  //   const rowData = this.props.location.state;
  // location = useLocation();
  // }
  componentDidMount() {
    // const {
    //   match: { params },
    // } = this.props;
    // console.log(params);
  }

  render() {
    // const rowData = this.props.location.state;
    // console.log(rowData);
    const { params } = this.props.match as any;
    // console.log(this.props.match.params);
    return (
      <>
        <div className="Full-Details">
          <div>
            <p>Property Name: {params.name}</p>
            <p>ID: {params.id}</p>
            <img
              src="https://cf.bstatic.com/images/hotel/max1024x768/134/134997012.jpg"
              width="400"
              height="500"
            />
            <br />
            <div className="ActionButton">
              <button className="Actionbtn1">Buy Now</button>
              <button>Add to wishlist</button>
            </div>
          </div>
          <div className="prodInfo">
            <h2>Guaranteed modern house</h2>
            <p className="location">
              <i className="fa fa-map-marker"></i> 14 Tottenham Road, London
            </p>
            <button className="propertyType">For Sale</button>
            <p>
              Price :<span>$389.000</span>
              <span className="originalPrice">$500.000</span>
            </p>
            <div className="highlights">
              <p className="sub-title">Highlights</p>
              <ul>
                <li> Taxi Availability</li>
                <li> 3 Beds</li>
                <li> 3 Baths</li>
              </ul>
            </div>
            <p className="sub-title">Additional details</p>
            <div className="detailedInfo">
              <div className="infoBlock">
                <span>Status</span>
                <p>Ready To Move </p>
              </div>
              <div className="infoBlock">
                <span> Type</span>
                <p>Residential </p>
              </div>
              <div className="infoBlock">
                <span>Property Type</span>
                <p> House</p>
              </div>
            </div>
            <button className="contactOwner">Contact</button>
          </div>
        </div>
      </>
    );
  }
}
export default Villa;
