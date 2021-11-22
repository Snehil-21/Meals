import React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const Search = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsList = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <Search>
        <Searchbar style={{ elevation: 12 }} />
      </Search>
      <RestaurantsList>
        <RestaurantInfoCard />
      </RestaurantsList>
    </SafeArea>
  );
};
