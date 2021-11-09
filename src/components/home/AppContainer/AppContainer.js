import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

import Overlay from "../../ui/Overlay/Overlay";

export default AppContainer = ({ children }) => {
  const isLoading = useSelector(state => state);
  return(
    <View style={{flex: 1}}>
      {children}
      {isLoading.IsLoadingReducer && <Overlay size='large' />}
    </View>
  );
};
