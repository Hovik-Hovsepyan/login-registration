import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import { navigationArr, navigationHome } from "./navigationArr";

const Stack = createStackNavigator();
  export const  StackNavigatorRegistration = () => {
    return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {
        navigationArr.map((el,index) => {
          return (
            <Stack.Screen
              key={index}
              name={el.name}
              component={el.component} />
          );
        })
      }
    </Stack.Navigator>
    );
  };

export const StackNavigatorHome = () => {
  return(
  <Stack.Navigator screenOptions={{headerShown: false}}>
    {
      navigationHome.map((el,index) => {
        return (
          <Stack.Screen
            key={index}
            name={el.name}
            component={el.component} />
        );
      })
    }
  </Stack.Navigator>
  );
};
