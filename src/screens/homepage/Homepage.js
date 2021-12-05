import React, {useEffect} from 'react';
import {FlatList, PermissionsAndroid, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FlexHelpers from 'react-native-flex-helper';
import Contacts from 'react-native-contacts';

import axios from 'axios';
import {baseUrl} from '../../constants/constants';
import {Colors} from '../../styles';
import AsyncStorageService from '../../services/asyncStorage/asyncStorage';
import {isLoadingAction, isUserLoggedAction} from '../../actions/appActions';
import {setContactsAction} from '../../actions/getContactsAction';
import ContactCard from '../../components/ui/ContactCard/ContactCard';
import AppButton from '../../components/ui/AppButton/AppButton';

const Homepage = () => {
  const logOutUrl = `${baseUrl}/auth/logout`;

  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contactsReducer.contacts);

  const logOut = async () => {
    dispatch(isLoadingAction(true));
    try {
      const token = await AsyncStorageService.getToken();
      const {data} = await axios.post(
        logOutUrl,
        {},
        {headers: {Authorization: `Bearer ${token}`}},
      );
      if (data?.status) {
        AsyncStorageService.removeToken().then(() => {
          dispatch(isUserLoggedAction(false));
          dispatch(isLoadingAction(false));
        });
      } else {
        ///err
      }
    } catch (error) {
      dispatch(isLoadingAction(false));
      ///err
    }
  };

  useEffect(() => {
    try {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Login App Contacts Permission',
        message: 'Login App needs access to your contacts ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }).then(response => {
        dispatch(isLoadingAction(true));
        if (response === 'granted') {
          Contacts.getAll()
            .then(allContacts => {
              const contactsArr = [];
              allContacts.forEach(contact => {
                contactsArr.push({
                  name: contact?.displayName,
                  phone:
                    contact?.phoneNumbers[0] !== undefined &&
                    contact?.phoneNumbers[0]?.number,
                  id: contact?.recordID,
                  thumbnailPath: contact.thumbnailPath && contact.thumbnailPath,
                });
              });
              dispatch(setContactsAction(contactsArr));
              dispatch(isLoadingAction(false));
            })
            .catch(error => {
              console.log(error);
              dispatch(isLoadingAction(false));
            })
            .finally(e => {
              dispatch(isLoadingAction(false));
            });
        }
      });
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const renderItem = ({item}) => {
    return (
      <ContactCard
        name={item.name}
        phone={item.phone}
        avatarPath={item.thumbnailPath}
      />
    );
  };

  return (
    <View style={styles.fill}>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <AppButton
        btnText="Log out"
        pressHandler={logOut}
        btnStyle={[styles.logOut, styles.crossCenter]}
      />
    </View>
  );
};

const styles = FlexHelpers.create({
  logOut: {
    backgroundColor: Colors.yellow,
  },
  getContactsBtnStyle: {
    backgroundColor: Colors.black,
  },
});

export default Homepage;
