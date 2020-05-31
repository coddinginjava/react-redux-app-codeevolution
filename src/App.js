import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import CakeContinaer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HookCakeConatiner from "./components/HooksCakeContainer";
import IceCreamContianer from "./components/iceCreamContainer";
import BulkCakeContainer from "./components/BulkCakeContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContinaer />
        <HookCakeConatiner />
        <IceCreamContianer />
        <BulkCakeContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
