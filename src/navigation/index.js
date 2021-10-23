import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { StackNavigatorRegistration } from "./navigation";

export const AppNavigation = () => {
  return(
    <NavigationContainer>
      <StackNavigatorRegistration />
    </NavigationContainer>
  )
}
