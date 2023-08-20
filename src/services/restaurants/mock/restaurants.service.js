import { mocks } from "./index.js";
import camelize from "camelize";

export const restaurantsRequest = async (
  location = "37.7749295,-122.4194155"
) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const restaurantsTransform = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(restaurantsTransform);
};
