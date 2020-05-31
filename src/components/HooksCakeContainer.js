import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "./../redux";

const HookCakeConatiner = () => {
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>num of cakes {numOfCake}</h2>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  );
};

export default HookCakeConatiner;
