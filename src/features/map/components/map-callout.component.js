import React from "react";
import { RestaurantToolTipInfo } from "../../../components/restaurant/restaurant-tooltip-info.component";

export const MapCallout = ({ restaurant }) => {
  return <RestaurantToolTipInfo isMap restaurant={restaurant} />;
};
