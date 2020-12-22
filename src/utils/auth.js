import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthService {
  // retrieve data saved in token
  getProfile() {
    const token = this.getToken();
    if (token) {
      const profile = jwt_decode(token);
      console.log("user profile: ");
      console.log(profile.data);
      return profile.data;
    }
    return console.log("no user profile found");
  }

  // check if the user is still logged in
  loggedIn = async () => {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    // use type coersion to check if token is NOT undefined and the token is NOT expired
    return !!token && !this.isTokenExpired(token);
  };

  // check if the token has expired
  isTokenExpired(token) {
    try {
      const decoded = jwt_decode(token);
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
  getToken = async () => {
    // Retrieves the user token from AsyncStorage
    const token = await AsyncStorage.getItem("id_token");
    return token;
  };

  // set token to AsyncStorage and reload page to homepage
  login = async (idToken) => {
    // Saves user token to AsyncStorage
    try {
      await AsyncStorage.setItem("id_token", idToken);
      console.log("stored token: ");
      const storedToken = await AsyncStorage.getItem("id_token");
      console.log(storedToken);
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
      return console.log("Logged out");
    } catch (e) {
      console.log("Couldn't log out: ");
      console.error(e);
    }
  };
}

export default new AuthService();
