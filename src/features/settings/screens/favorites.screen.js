import React, { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components/native";

import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/mock/restaurants.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  const { restaurants } = useContext(RestaurantsContext);
  return favorites.length ? (
    <SafeArea>
      <RestaurantList>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  // this line keeps us from getting the
                  // Warning
                  // Sending `onAnimatedValueUpdate` with no listeners registered.
                  navigation.removeListener,
                    navigation.navigate("RestaurantDetail", {
                      restaurant: item,
                    });
                }}
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </RestaurantList>
    </SafeArea>
  ) : (
    <NoFavoritesArea>
      <Text center>No favorites found</Text>
    </NoFavoritesArea>
  );
};
