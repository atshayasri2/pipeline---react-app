import React from "react";
import "./FeaturedProperties.css";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Compareprod from "../CompareProperty/CompareProducts";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { setItemToCompareReducer } from "../../store/compare/compare.action";
import { AllReduxStoreTypes } from "../../store/reducer";
import Event from "../tracking/tracking";
// import FinalizedProperty from "../FinalizedProperty/FinalizedProperty";
export interface IRoomDetail {
  id: number;
  name: string;
  imgURL: string;
  title: string;
  location: string;
  price: string;
  type: string;
  squarefeet: number;
  noOfBeds: number;
  noOfBaths: number;
  taxiAvailability: string;
}
const mapStateToProps = (reduxStates: AllReduxStoreTypes) => {
  return {
    ComparePropertiesData: reduxStates.compareReducer.compareItems,
  };
};
const mapDispatchToStore = (dispatch: Dispatch) => {
  return {
    sendToRedux: (item: IRoomDetail) => dispatch(setItemToCompareReducer(item)),
  };
};

const reduxConnector = connect(mapStateToProps, mapDispatchToStore);

interface IProps
  extends RouteComponentProps,
    ConnectedProps<typeof reduxConnector> {
  properties: IRoomDetail[];
}

interface IState {
  showModal: boolean;
  passData: IRoomDetail;
  popup: boolean;
}

class FeaturedProperties extends React.Component<IProps, IState> {
  public state: IState = {
    showModal: false,
    passData: {} as IRoomDetail,
    popup: false,
  };

  check = (typec: string) => {
    if (typec === "For Sale") return "sale";
    else {
      return "rent";
    }
  };

  checkLength() {
    if (this.props.ComparePropertiesData.length > 2) {
      this.setState({ popup: true });
      setTimeout(() => {
        this.setState({ popup: false });
      }, 2000);
    }
  }
  render() {
    return (
      <div className="allcards">
        <div className="cards-header">
          <h3>FEATURED PROPERTIES</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
          <p>labore et dolore magna aliquan ut enim ad minim veniam.</p>
          <div className="compareProperty">
            <Compareprod></Compareprod>
            <br />
            <br />
            <button
              id="compare-btn"
              onClick={() => {
                this.props.history.push({
                  pathname: `/FinalizedProperties/`,
                });
              }}
            >
              <i className="fa fa-shopping-cart "></i> Finalized Property
            </button>
          </div>
        </div>
        <div className="row">
          {this.props.properties.map((item, index) => (
            <div className="column" key={index}>
              <div className="card">
                <div className="icon-bar">
                  <div className="top-left">
                    <img src={item.imgURL} alt="room" />
                    <div className="textover">
                      <p className={this.check(item.type)}> {item.type}</p>
                    </div>
                  </div>
                  <div className="flex3">
                    <div>
                      <p className="card-title">{item.title}</p>
                      <p className="card-location">
                        <i className="fa fa-map-marker"></i> {item.location}
                      </p>
                    </div>
                    <div>
                      <button className="btn2">{item.price}</button>
                    </div>
                  </div>
                  <div className="flex4">
                    <p>
                      <i className="fa fa-arrows-alt"></i> {item.squarefeet}
                    </p>
                    <p>
                      <i className="fa fa-bed"></i> {item.noOfBeds} Beds
                    </p>
                    <p>
                      <i className="fa fa-paw"></i> {item.noOfBaths + " Baths"}
                    </p>
                    <p>
                      <i className="fa fa-taxi"></i> {item.taxiAvailability}
                    </p>
                  </div>

                  <button
                    className="compare-btn"
                    onClick={() => {
                      this.props.history.push({
                        // pathname: `/products/${item.name.toLowerCase()}/${
                        //   item.id
                        // }`,
                        pathname: `/products/${item.id}`,
                      });
                    }}
                  >
                    View Detail
                  </button>
                  <button
                    className="compare-btn tooltip"
                    onClick={() => {
                      this.props.sendToRedux(item);
                      this.setState({ passData: item });
                      this.checkLength();
                      Event(
                        "PROPERTY",
                        "Property added to compare",
                        "FeaturedProperties_Page"
                      );
                    }}
                  >
                    {/* {this.state.popup && (
                      <span className="tooltip-test">
                        Can't add more than three items
                      </span>
                    )} */}
                    Compare
                  </button>
                </div>
              </div>
            </div>
          ))}
          {this.state.popup && (
            <div id="modal" className="show">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <p>Can't compare more than three items</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default reduxConnector(withRouter(FeaturedProperties));
