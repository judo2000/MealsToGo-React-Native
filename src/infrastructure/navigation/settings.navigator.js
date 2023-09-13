import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { FavoritesScreen } from "../../features/settings/screens/favorites.screen";
const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerMode: "Screen",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          headerShown: true,
        }}
        name="Setting"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favorites" component={FavoritesScreen} />
    </SettingsStack.Navigator>
  );
};
