import React from "react";
import ReactDOM from "react-dom";

export default class Apartment extends React.Component<{}> {
  render() {
    return (
      <>
        <div className="Full-Details">
          <div>
            <img
              src="https://is1-2.housingcdn.com/4f2250e8/7fe3f307b76520f1a126eba25ea4c70c/v5/fs/axis_pleasant_apartments-manikonda-hyderabad-axis_home_developers.jpg"
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
