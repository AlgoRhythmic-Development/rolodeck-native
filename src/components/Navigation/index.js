// react-native-gesture-handler MUST BE AT TOP OF IMPORTS
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useStoreContext } from "../../utils/Store";
import { LOG_IN } from "../../utils/actions";
import Auth from "../../utils/auth";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Login from "../../screens/Login";
import Create from "../../screens/Create";
import SignupScreen from "../../screens/Signup";
import Contact from "../../screens/Contact";
import Collection from "../../screens/Collection";
import ScanScreen from "../../screens/ScanScreen";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const [state] = useStoreContext();
  const { isLoggedIn } = state;

  return (
    <NavigationContainer>
      <Tab.Navigator>
        {!isLoggedIn ? (
          <>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Signup" component={SignupScreen} />
          </>
        ) : (
          <>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Collection" component={Collection} />
            <Tab.Screen name="Scan" component={ScanScreen} />
            <Tab.Screen name="Create" component={Create} />
            <Tab.Screen name="Contact" component={Contact} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
