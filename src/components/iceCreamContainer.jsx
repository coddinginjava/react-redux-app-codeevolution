import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

const IceCreamContianer = (props) => {
  return (
    <div>
      <h2>Number of icream - {props.numOfIce}</h2>
      <button onClick={props.buyIceCream}>Buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIce: state.iceCream.numOfIce,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(IceCreamContianer);
