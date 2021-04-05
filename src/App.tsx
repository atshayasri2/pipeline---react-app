import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
//import Header from "header-component-typescript/Header";
import Footer from "./components/Footer/Footer";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import apidemo from "./components/PropertyFullDetails/APIdemo";
import HomeMain from "./homeMain";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./store/reducer";
import "./App.css";
import FinalizedProperty from "./components/FinalizedProperty/FinalizedProperty";
import { loadState, saveState } from "./localStorage";
import ReactGA from "react-ga";
// import { createBrowserHistory } from "history";

// var history = createBrowserHistory();

const TRACKING_ID = "UA-193145904-1";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

// history.listen((location: any) => {
//   ReactGA.set({ page: location.pathname });
//   ReactGA.pageview(location.pathname);
// });
const persistedSate = loadState();
const store = createStore(
  allReducers(),
  persistedSate,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState({
    compareReducer: store.getState().compareReducer,
    finalReducer: store.getState().finalReducer,
  });
});
function App() {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    // ReactGA.pageview(window.location.pathname);
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="spinner">
          <img
            src="https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp"
            alt="loading"
          />
        </div>
      ) : (
        <Provider store={store}>
          <div>
            <Router>
              <Header />
              <div>
                <Switch>
                  <Route path="/" exact component={HomeMain} />
                  <Route path="/products/:id" component={apidemo} />
                  <Route
                    path="/FinalizedProperties"
                    component={FinalizedProperty}
                  />
                </Switch>
                <Footer />
              </div>
            </Router>
          </div>
        </Provider>
      )}
    </>
  );
}
export default App;
