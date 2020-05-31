import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

const CakeContinaer = (props) => {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCake}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCake: state.cake.numOfCake,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(CakeContinaer);
