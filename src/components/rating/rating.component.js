import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

const StarContainer = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const FontAwesomeStar = styled(FontAwesome)`
  font-size: ${(props) => props.theme.sizes[1]};
  color: ${(props) => props.theme.colors.text.gold};
`;

export const Rating = ({ rating }) => {
  console.log("rating", rating);
  return (
    <StarContainer>
      <FontAwesomeStar
        name={
          rating >= 1 ? "star" : rating >= 0.5 ? "star-half-empty" : "star-o"
        }
      />
      <FontAwesomeStar
        name={
          rating >= 2 ? "star" : rating >= 1.5 ? "star-half-empty" : "star-o"
        }
      />
      <FontAwesomeStar
        name={
          rating >= 3 ? "star" : rating >= 2.5 ? "star-half-empty" : "star-o"
        }
      />
      <FontAwesomeStar
        name={
          rating >= 4 ? "star" : rating >= 3.5 ? "star-half-empty" : "star-o"
        }
      />
      <FontAwesomeStar
        name={
          rating >= 5 ? "star" : rating >= 4.5 ? "star-half-empty" : "star-o"
        }
      />
    </StarContainer>
  );
};
