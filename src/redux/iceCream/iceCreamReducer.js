import { BUY_ICE } from "./iceCreamTypes";

const intialStae = {
  numOfIce: 20,
};

const iceCreamReducer = (state = intialStae, action) => {
  switch (action.type) {
    case BUY_ICE:
      return {
        ...state,
        numOfIce: state.numOfIce - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
