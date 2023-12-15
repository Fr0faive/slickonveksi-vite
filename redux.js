import { createStore } from "redux";

// reducer
const reducer = (
  state = {
    cart: [{ id: 1, name: "Apple" }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// store
const store = createStore(reducer);
console.log(store.getState());

// subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch
const action1 = {
  type: "ADD_TO_CART",
  payload: {
    id: 2,
    name: "Orange",
  },
};
store.dispatch(action1);
