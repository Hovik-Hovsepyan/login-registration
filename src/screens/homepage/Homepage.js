import React, {useEffect, useState} from 'react';
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
import Input from '../../components/ui/Input/Input';

const Homepage = () => {
  const logOutUrl = `${baseUrl}/auth/logout`;

  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');
  const [contactsData, setContactsData] = useState([]);

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
              setContactsData(contactsArr);
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

  useEffect(() => {
    const filteredContacts = contacts?.filter?.(el => {
      return el.name?.toLowerCase().startsWith(searchText.toLowerCase());
    });
    setContactsData(filteredContacts);
  }, [searchText]);

  return (
    <View style={styles.fill}>
      <View style={styles.rowCenter}>
        <Input
          placeholder="Search contact"
          parentState={searchText}
          setParentState={setSearchText}
        />
      </View>
      <FlatList
        data={contactsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.rowCenter}>
        <AppButton
          btnText="Log out"
          pressHandler={logOut}
          btnStyle={[styles.logOut]}
        />
      </View>
    </View>
  );
};

const styles = FlexHelpers.create({
  logOut: {
    backgroundColor: Colors.black,
  },
  getContactsBtnStyle: {
    backgroundColor: Colors.black,
  },
  searchInp: {},
});

export default Homepage;
