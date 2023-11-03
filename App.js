import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./src/Login";
import RegisterScreen from "./src/Register";
import HomeScreen from "./src/Home";
import ForgotPassword from "./src/Forgotpw";
import Add from "./src/AddProduct";
import Searchs from "./src/Search";
import Logouts from "./src/Logout";
import Infomation from "./src/Info";
import Notifica from "./src/Notification";
import Carts from "./src/Cart";
import ViewInfo from "./src/ViewInfo";
import ProductDetail from "./src/ProductDetail";
import Messages from "./src/Message";
import Buys from "./src/Buy";
import OTPScreen from "./src/Otp";
import ForgotPass from "./src/Forgotpassword";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="AddProduct" component={Add} />
      <Drawer.Screen name="Notifica" component={Notifica} />
      <Drawer.Screen name="Info" component={Infomation} />
      <Drawer.Screen name="Cart" component={Carts} />
      <Drawer.Screen name="Message" component={Messages} />
      <Drawer.Screen name="Buy" component={Buys} />
      <Drawer.Screen name="Logout" component={Logouts} />
    </Drawer.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Forgotpw" component={ForgotPassword} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="ViewInfo" component={ViewInfo} />
        <Stack.Screen name="Search" component={Searchs} />
        <Stack.Screen name="Message" component={Messages} />
        <Stack.Screen name="Buy" component={Buys} />
        <Stack.Screen name="Otp" component={OTPScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPass} />
        <Stack.Screen
          name="Home"
          component={DrawerNavigator} // Sử dụng BottomTabNavigator là một trong các màn hình
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  boxIcon: {
    alignItems: "center",
  },
  showTxt: {
    display: "flex",
  },
  hiddenTxt: {
    display: "none",
  },
});
