// reducer.js

import { Type } from "./action.type";

export const initialState = {
  basket: [],
  user: null,
  location: {
    city: "Bole",
    state: "Addis Ababa",
    country: "Ethiopia",
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET: {
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );
      let newBasket;

      if (existingItem) {
        newBasket = state.basket.map((item) =>
          item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      } else {
        newBasket = [...state.basket, { ...action.item, amount: 1 }];
      }

      return {
        ...state,
        basket: newBasket,
      };
    }

    case Type.REMOVE_FROM_BASKET: {
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          newBasket.splice(index, 1);
        }
      }

      return {
        ...state,
        basket: newBasket,
      };
    }
  case Type.EMPTY_BASKET:
    return {
     ...state,
      basket: [],
    };
    case Type.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case Type.SET_LOCATION:
      return {
        ...state,
        location: action.payload, // Update the location in the state
      };

    default:
      return state;
  }
};
