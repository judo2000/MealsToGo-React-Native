import { mockImages, mocks } from "./index.js";
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
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * mockImages.length)];
    });
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(restaurantsTransform);
};
