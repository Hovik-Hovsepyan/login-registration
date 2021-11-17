import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';

const GoBack = ({size, color, backBtn}) => {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View>
      <Icon
        name="leftcircle"
        size={size}
        color={color}
        style={backBtn}
        onPress={() => goBack()}
      />
    </View>
  );
};

export default GoBack;
