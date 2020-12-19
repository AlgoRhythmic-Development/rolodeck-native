import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthService {
  // retrieve data saved in token
  getProfile() {
    return decode(this.getToken());
  }

  // check if the user is still logged in
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    // use type coersion to check if token is NOT undefined and the token is NOT expired
    return !!token && !this.isTokenExpired(token);
  }

  // check if the token has expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  // retrieve token from AsyncStorage
  getToken() {
    // Retrieves the user token from AsyncStorage
    return AsyncStorage.getItem("id_token");
  }

  // set token to AsyncStorage and reload page to homepage
  login = async (idToken) => {
    // Saves user token to AsyncStorage
    try {
      console.log("attempting to store token: " + idToken);
      await AsyncStorage.setItem("id_token", idToken);
      console.log("successfully stored token!");
    } catch (e) {
      console.log(e);
    }
    // AsyncStorage.setItem('id_token', idToken);

    // window.location.assign('/cards');
  };

  // clear token from AsyncStorage
  logout = async () => {
    // Clear user token and profile data from AsyncStorage
    try {
      await AsyncStorage.removeItem("id_token");
    } catch (e) {
      console.error(e);
    }
  };
}

export default new AuthService();
