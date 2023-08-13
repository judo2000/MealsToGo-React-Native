import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
//import { SvgXml } from "react-native-svg";
import { Rating } from "./rating.component";

import { FontAwesome } from "@expo/vector-icons";
//import star from "../../../../assets/star";

/*-----Styled Components-----*/
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

/*-----Styled Components-----*/

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?s=1024x1024&w=is&k=20&c=96MkVCuqUWOcMZ7vO5nG41rPufiSWlayTac_nsxXUTw=",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 3.6,
    isClosedTemporarily,
  } = restaurant;

  //const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>

        <Rating rating={rating} />

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
