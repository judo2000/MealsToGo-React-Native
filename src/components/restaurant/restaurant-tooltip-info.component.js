import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";

import { Text } from "../typography/text.component";

// Image allows tooltip images to be displayed on IOS
const ToolTipImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

// WebView allows tooltip image to display on Android
const ToolTipWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";
export const RestaurantToolTipInfo = ({ restaurant }) => {
  const Image = isAndroid ? ToolTipWebView : ToolTipImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption">
        {restaurant.name}
      </Text>
    </Item>
  );
};
