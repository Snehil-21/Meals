import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { View, Text } from "react-native";

export const CardContainer = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  elevation: 12;
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[0]};
`;

export const IconsRow = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const OpenIcon = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
