import * as React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { AllReduxStoreTypes } from "../../store/reducer";
import "./FinalizedProperty.css";
import { Dispatch } from "redux";
import { removeItemFromFinalizedReducer } from "../../store/final/final.action";
const mapStateToProps = (reduxStates: AllReduxStoreTypes) => {
  return {
    FinalizedPropertyData: reduxStates.finalReducer.FinalItems,
  };
};
const mapDispatchToStore = (dispatch: Dispatch) => {
  return {
    sendTo: (index: number) => dispatch(removeItemFromFinalizedReducer(index)),
  };
};

const reduxConnector = connect(mapStateToProps, mapDispatchToStore);
interface IState {
  showModal: boolean;
  content: string;
  showProperty: boolean;
}

interface IProp1
  extends ConnectedProps<typeof reduxConnector>,
    RouteComponentProps {}

class FinalizedProperty extends React.Component<IProp1, IState> {
  public state: IState = {
    showModal: true,
    content: "",
    showProperty: false,
  };
  checkEmptyOrNot() {
    if (this.props.FinalizedPropertyData.length === 0) {
      this.setState({ content: "Your finalized property is empty!!" });
      this.setState({ showModal: false });
    } else {
      this.setState({ content: "" });
    }
  }
  componentDidMount() {
    this.checkEmptyOrNot();
  }
  displayPropertyDocs() {
    this.setState({ showProperty: true });
  }
  render() {
    return (
      <>
        <div className="cart">
          {!this.state.showModal && (
            <div className="cart-empty">{this.state.content}</div>
          )}
          {this.state.showModal && (
            <>
              <h1 className="cart-header">Finalized Properties</h1>
              {this.props.FinalizedPropertyData.map((item, index) => (
                <div className="cart-Details">
                  <div className="final-prop-img">
                    <img src={item.imgURL} alt={item.title} />
                    <br />
                  </div>
                  <div className="prodInfo">
                    <h3>{item.title}</h3>
                    <p className="location">
                      <i className="fa fa-map-marker"></i> {item.location}
                    </p>
                    <button className="propertyType">{item.type}</button>
                    <p>
                      Price :<span>{item.price}</span>
                      {/* <span className="originalPrice">$500.000</span> */}
                    </p>
                    {/* <div className="highlights">
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
                    </div> */}
                    <div className="cart-btn">
                      <button className="contact-btn">Contact</button>
                      <button
                        onClick={() => {
                          this.props.sendTo(index);
                          this.checkEmptyOrNot();
                        }}
                      >
                        Remove
                      </button>
                      <button
                        className="btn1"
                        onClick={() => {
                          this.displayPropertyDocs();
                        }}
                      >
                        Request Property Documents
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="btn-buy">
                <button>Proceed to Buy</button>
              </div> 
              )*/}
            </>
          )}
        </div>
        {this.state.showProperty && (
          <div id="modal" className="show">
            <div className="modal-dialog-final">
              <div className="modal-content-property reqDocs">
                <div className="modal-bodyCompare">
                  {/* <iframe
                    src="http://docs.google.com/gview?url=https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf&embedded=true"
                    width="600"
                    height="600"
                    frameBorder="0"
                  ></iframe> */}
                  <form className="form-container">
                    <h2>Request Documents</h2>

                    <label htmlFor="email">
                      <b>Email</b>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      name="email"
                      required
                    />

                    <label htmlFor="phoneno">
                      <b>Phone number</b>
                    </label>
                    <input
                      type="tel"
                      id="phoneno"
                      name="phoneno"
                      placeholder="Enter your phone number"
                      pattern="[0-9]{10}"
                      required
                    />

                    <button type="submit" className="btn">
                      Submit
                    </button>
                  </form>
                </div>
                <div className="modal-footer">
                  <div>
                    <button
                      onClick={() => this.setState({ showProperty: false })}
                      className="closePopup"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default withRouter(reduxConnector(FinalizedProperty));
