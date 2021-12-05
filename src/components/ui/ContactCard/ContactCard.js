import React from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import FlexHelpers from 'react-native-flex-helper';

import {Colors} from '../../../styles';
import avatarPanda from '../../../assets/images/avatarPanda.png';

const ContactCard = ({name, phone, avatarPath}) => {
  return (
    <View style={[styles.rowCenter, styles.mainContainer]}>
      <View style={[styles.fillRowMain]}>
        <FastImage
          source={avatarPath ? {uri: avatarPath} : avatarPanda}
          style={styles.avatar}
        />
      </View>
      <View style={[styles.fillRow, styles.infoContainer]}>
        <Text style={styles.infoTxt}>{name}</Text>
        <Text style={styles.infoTxt}>{phone}</Text>
      </View>
    </View>
  );
};

const styles = FlexHelpers.create({
  mainContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: Colors.lightBlue,
  },
  infoTxt: {
    color: Colors.black,
    fontSize: 16,
    marginHorizontal: 15,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  infoContainer: {
    flexWrap: 'wrap',
  },
});

export default ContactCard;
