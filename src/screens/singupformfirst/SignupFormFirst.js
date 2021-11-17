import React, {useCallback, useState} from 'react';
import {Text, View} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import Input from '../../components/ui/Input/Input';
import AppButton from '../../components/ui/AppButton/AppButton';

import {SIGNUPFORMSECOND_SCREEN} from '../../navigation/screenNames';
import {inputDataCollector} from '../../actions/inputDataCollectorAction';
import FlexHelpers from 'react-native-flex-helper';
import {Colors} from '../../styles';

const SignupFormFirst = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const next = useCallback(() => {
    const firstPageData = {
      name,
      surname,
      username,
    };
    dispatch(inputDataCollector(firstPageData));
    if (name && surname && username) {
      navigation.navigate(SIGNUPFORMSECOND_SCREEN);
    } else {
      setErrMsg('All fields are required');
    }
  }, [dispatch, name, navigation, surname, username]);

  useFocusEffect(
    useCallback(() => {
      setErrMsg('');
    }, []),
  );

  return (
    <View style={styles.fillCenter}>
      <Text>First name</Text>
      <Input placeholder="First name" onChangeText={setName} />

      <Text>Last name</Text>
      <Input placeholder="Last name" onChangeText={setSurname} />

      <Text>Username</Text>
      <Input placeholder="Username" onChangeText={setUsername} />

      <Text style={styles.errMsg}>{errMsg}</Text>
      <AppButton
        pressHandler={next}
        btnStyle={styles.btnStyle}
        btnText="Next"
      />
    </View>
  );
};

const styles = FlexHelpers.create({
  btnStyle: {
    backgroundColor: Colors.lightBlue,
  },
  errMsg: {
    color: Colors.red,
  },
});

export default SignupFormFirst;
