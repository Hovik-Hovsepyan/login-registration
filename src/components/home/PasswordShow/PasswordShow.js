import React, {useCallback} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

const PasswordShow = ({size, color, passwordShowStyle, show, setShow}) => {
  const showHide = useCallback(() => {
    show === 'eye-off' ? setShow('eye') : setShow('eye-off');
  }, [setShow, show]);

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
