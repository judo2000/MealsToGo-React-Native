import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";

import { RestaurantsContext } from "../../../services/restaurants/mock/restaurants.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

// import { FavoritesContext } from "../../../services/favorites/favorites.context";

import { Search } from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContsiner = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <LoadingContsiner>
        {isLoading && (
          <Loading size={50} animating={true} color={MD2Colors.blue800} />
        )}
      </LoadingContsiner>

      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
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
    </SafeArea>
  );
};
