import React from "react";
import { Image } from "react-native";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  CardContainer,
  CardCover,
  Info,
  Address,
  Rating,
  IconsRow,
  OpenIcon,
} from "./restaurant-info-card.styles";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    address = "Some Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.round(rating)));
  // console.log(restaurant);

  return (
    <CardContainer>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <IconsRow>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml
                xml={star}
                width={20}
                height={20}
                key={JSON.stringify(Math.random())}
              />
            ))}
          </Rating>
          <OpenIcon>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="small">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="medium">
              <Image style={{ height: 15, width: 15 }} source={{ uri: icon }} />
            </Spacer>
          </OpenIcon>
        </IconsRow>
        <Address>{address}</Address>
      </Info>
    </CardContainer>
  );
};
