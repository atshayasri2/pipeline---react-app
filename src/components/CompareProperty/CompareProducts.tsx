import * as React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { AllReduxStoreTypes } from "../../store/reducer";
import "./CompareProducts.css";
import { Dispatch } from "redux";

import { setItemToFinalizedReducer } from "../../store/final/final.action";
import { removeItemFromCompareReducer } from "../../store/compare/compare.action";
import { IRoomDetail } from "../FeaturedProperties/FeaturedProperties";
const mapStateToProps = (reduxStates: AllReduxStoreTypes) => {
  return {
    ComparePropertiesData: reduxStates.compareReducer.compareItems,
  };
};
const mapDispatchToStore = (dispatch: Dispatch) => {
  return {
    sendTo: (index: number) => dispatch(removeItemFromCompareReducer(index)),
    sendToRedux: (item: IRoomDetail) =>
      dispatch(setItemToFinalizedReducer(item)),
  };
};

const reduxConnector = connect(mapStateToProps, mapDispatchToStore);
interface IState {
  showModal: boolean;
  content: string;
}

interface IProp1
  extends ConnectedProps<typeof reduxConnector>,
    RouteComponentProps {}

class CompareProducts extends React.Component<IProp1, IState> {
  public state: IState = {
    showModal: false,
    content: "",
  };
  checkEmptyOrNot() {
    if (this.props.ComparePropertiesData.length === 0) {
      this.setState({ content: "Add items to compare" });
    } else {
      this.setState({ content: "" });
    }
  }
  showpopup() {
    document.body.style.overflow = "hidden";
  }
  closepopup() {
    document.body.style.overflow = "auto";
  }
  render() {
    return (
      <>
        <button
          id="compare-btn"
          onClick={() => {
            this.setState({ showModal: true });
            this.checkEmptyOrNot();
            this.showpopup();
          }}
        >
          Compare Property
        </button>

        {this.state.showModal && (
          <div id="modal" className="show">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Comparing Properties</h5>

                  <button
                    onClick={() => {
                      this.closepopup();
                      this.setState({ showModal: false });
                    }}
                  >
                    X
                  </button>
                </div>
                <div className="modal-bodyCompare">
                  <h1>{this.state.content}</h1>
                  {this.props.ComparePropertiesData.map((item, index) => (
                    <div className="CompareModal">
                      <div className="compareBodyHeader">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="compareBodyMain">
                        <img
                          src={item.imgURL}
                          alt="Property"
                          width="100%"
                          height="200"
                        />
                        <table>
                          <tbody>
                            <tr>
                              <th>Type</th>
                              <td>{item.type}</td>
                            </tr>
                            <tr>
                              <th>location</th>
                              <td>1{item.location}</td>
                            </tr>
                            <tr>
                              <th>Price</th>
                              <td>{item.price}</td>
                            </tr>
                            <tr>
                              <th>squarefeet</th>
                              <td>{item.squarefeet}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="compareBodyFooter">
                        <button
                          className="btn1"
                          onClick={() => {
                            this.props.sendTo(index);
                            this.checkEmptyOrNot();
                          }}
                        >
                          Remove
                        </button>
                        <button
                          onClick={() => {
                            this.props.sendToRedux(item);
                          }}
                        >
                          Finalize
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="modal-footer">
                  <div>
                    <button
                      onClick={() => {
                        this.closepopup();
                        this.setState({ showModal: false });
                      }}
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
export default withRouter(reduxConnector(CompareProducts));
