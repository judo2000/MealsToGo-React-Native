import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { RestaurantToolTipInfo } from "../restaurant/restaurant-tooltip-info.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const FavoritesWrapper = styled.View`
  padding: 10px;
`;

export const FavoritesBar = ({ favorites, onNavigate }) => {
  if (!favorites.length) {
    return null;
  }
  return (
    <FavoritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favorites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name.split(" ").join("");
          return (
            <Spacer
              position="left"
              size="medium"
              key={key}
              style={{ marginRight: 10 }}
            >
              <TouchableOpacity
                onPress={() => {
                  // this line keeps us from getting the
                  // Warning
                  // Sending `onAnimatedValueUpdate` with no listeners registered.
                  onNavigate.removeListener,
                    onNavigate("RestaurantDetail", {
                      restaurant,
                    });
                }}
              >
                <RestaurantToolTipInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
