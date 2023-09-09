import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, Button } from "react-native";

import { SafeArea } from "../../components/utility/safe-area.component";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

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

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="Logout" onPress={() => onLogout()} />
    </SafeArea>
  );
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
  <Tab.Navigator
    screenOptions={createScreenOptions}
    // tabBarOptions={{
    //   activeTintColor: "tomato",
    //   inactiveTintColor: "gray",
    // }}
  >
    <Tab.Screen name="Restaurant" component={RestaurantsNavigator} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);
