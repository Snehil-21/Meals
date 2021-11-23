import React from "react";
import { StatusBar, SafeAreaView, View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const Search = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <Search>
        <Searchbar style={{ elevation: 12 }} />
      </Search>
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
