import React from "react";
// import ReactDOM from "react-dom";
import { RouteComponentProps, RouteProps } from "react-router-dom";
import "./product.css";
interface IProps extends RouteComponentProps {}
interface IState {
  isLoading: boolean;
}

export default class House extends React.Component<
  IProps & RouteProps,
  IState
> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  getData() {
    setTimeout(() => {
      console.log("Property Data is fetched");
      this.setState({
        isLoading: false,
      });
    }, 5000);
  }

  componentDidMount() {
    console.log("compoentDidMount");
    this.getData();
  }
  render() {
    console.log("Rendering");
    const { params } = this.props.match as any;
    return (
      <>
        {this.state.isLoading ? (
          <h2>LOADING...</h2>
        ) : (
          <div className="Full-Details">
            <div>
              <p>Property Name: {params.name}</p>
              <p>ID: {params.id}</p>
              <img
                src="https://i.pinimg.com/originals/c7/13/f0/c713f070f12ff742b085b7b0229641e6.jpg"
                alt="PropertiesImage"
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
        )}
      </>
    );
  }
}
// <h1>Guaranteed modern house</h1>
// <table>
//   <tr>
//     <th>Type</th>
//     <td>For Sale</td>
//   </tr>
//   <tr>
//     <th>location</th>
//     <td>14 Tottenham Road, London</td>
//   </tr>
//   <tr>
//     <th>Price</th>
//     <td>$389.000</td>
//   </tr>
//   <tr>
//     <th>squarefeet</th>
//     <td>3040</td>
//   </tr>
// </table>
