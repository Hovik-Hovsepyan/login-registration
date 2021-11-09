import React from "react";

import Icon from "react-native-vector-icons/Ionicons";

const PasswordShow = ({ size, color, passwordShowStyle, show, setShow }) => {
  const showHide = () => {
    show == "eye-off" ? setShow('eye') : setShow('eye-off');
  };

  return (
    <Icon
      name={show} 
      size={size} 
      color={color} 
      onPress={showHide} 
      style={passwordShowStyle} 
    />
  );
};

export default PasswordShow;
