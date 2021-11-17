import React, {useCallback, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import FlexHelpers from 'react-native-flex-helper';

import Input from '../../components/ui/Input/Input';
import AppButton from '../../components/ui/AppButton/AppButton';

import {SIGNUPFORMSECOND_SCREEN} from '../../navigation/screenNames';
import {inputDataCollector} from '../../actions/inputDataCollectorAction';

import {Colors} from '../../styles';

const SignupFormFirst = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const nameRef = useRef('');
  const surnameRef = useRef('');
  const usernameRef = useRef('');

  const [errMsg, setErrMsg] = useState('');

  const next = useCallback(() => {
    const firstPageData = {
      name: nameRef.current,
      surname: surnameRef.current,
      username: usernameRef.current,
    };
    dispatch(inputDataCollector(firstPageData));
    if (nameRef.current && surnameRef.current && usernameRef.current) {
      navigation.navigate(SIGNUPFORMSECOND_SCREEN);
    } else {
      setErrMsg('All fields are required');
    }
  }, [dispatch, nameRef, navigation, surnameRef, usernameRef]);

  useFocusEffect(
    useCallback(() => {
      setErrMsg('');
    }, []),
  );

  return (
    <View style={styles.fillCenter}>
      <Text>First name</Text>
      <Input placeholder="First name" changeRef={nameRef} />

      <Text>Last name</Text>
      <Input placeholder="Last name" changeRef={surnameRef} />

      <Text>Username</Text>
      <Input placeholder="Username" changeRef={usernameRef} />

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
