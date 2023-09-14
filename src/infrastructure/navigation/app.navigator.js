import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SettingsNavigator } from "./settings.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

import { FavoritesContextProvider } from "../../services/favorites/favorites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";

//********************/
// found this as a solution to stop
//  Sending `onAnimatedValueUpdate` with no listeners registered.
// when going to the RestaurantDetail screen
import { Animated } from "react-native";

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});
//****************/

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurant: {
    focused: "restaurant",
    outlined: "restaurant-outline",
  },
  Map: {
    focused: "map",
    outlined: "map-outline",
  },
  Settings: {
    focused: "settings",
    outlined: "settings-outline",
  },
};

const createScreenOptions = ({ route }) => {
  return {
    tabBarIcon: ({ focused, color, size }) => {
      const iconName = focused
        ? TAB_ICON[route.name]["focused"]
        : TAB_ICON[route.name]["outlined"];

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

export const AppNavigator = () => (
  <FavoritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          // tabBarOptions={{
          //   activeTintColor: "tomato",
          //   inactiveTintColor: "gray",
          // }}
        >
          <Tab.Screen name="Restaurant" component={RestaurantsNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavoritesContextProvider>
);
