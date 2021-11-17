import MainAsyncStorageService from './mainStorageService';

class AsyncStorageService extends MainAsyncStorageService {
  static setToken(token) {
    return super.setData('token', token);
  }

  static getToken() {
    return super.getData('token');
  }

  static removeToken() {
    return super.removeItem('token');
  }
}

export default AsyncStorageService;
