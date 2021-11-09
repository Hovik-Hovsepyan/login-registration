import AsyncStorage from "@react-native-async-storage/async-storage";
class AsyncStorageService {
  static async setData(key,value) {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
    }
  };

  static async getData(key) {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
        return value;
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  };
  
  static async removeItem (key){
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      // remove errorr
    }
  };

  static async clearData (){
    try {
      await AsyncStorage.clear();
    } catch(e) {
      // remove error
    }
  };
  
} 

export default AsyncStorageService;
