import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ImageGallery from "./../components/ImageGallery";
import LikedImages from "../screens/LikedImages";

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  ImageGallery: undefined;
  LikedImages: undefined;
};
const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ImageGallery">
        <Stack.Screen name="ImageGallery" component={ImageGallery} />
        <Stack.Screen name="LikedImages" component={LikedImages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
