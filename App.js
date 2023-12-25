import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./src/users/Login";
import RegisterScreen from "./src/users/Register";
import HomeScreen from "./src/users/Home";
import ForgotPassword from "./src/users/Forgotpw";
import Add from "./src/admin/AddProduct";
import Searchs from "./src/users/Search";
import Logouts from "./src/users/Logout";
import Infomation from "./src/users/Info";
import Notifica from "./src/users/Notification";
import Carts from "./src/users/Cart";
import ProductDetail from "./src/users/ProductDetail";
import Messages from "./src/users/Message";
import Buys from "./src/users/Buy";
import OTPScreen from "./src/users/Otp";
import Otpw from "./src/users/Otpfgpw";
import ForgotPass from "./src/users/Forgotpassword";
import Map from "./src/users/Maps";
import Oder from "./src/users/Oders";
import SettingScreen from "./src/users/Setting";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const BottomTabNavigator = () => {
  const navigation = useNavigation();

  // const DrawerNavigator = () => {
  //   return (
  //     <Drawer.Navigator>
  //       <Drawer.Screen name="Homes" component={HomeScreen} />
  //       <Drawer.Screen name="AddProduct" component={Add} />
  //       <Drawer.Screen name="Notifica" component={Notifica} />
  //       <Drawer.Screen name="Info" component={Infomation} />
  //       <Drawer.Screen name="Cart" component={Carts} />
  //       <Drawer.Screen name="Message" component={Messages} />
  //       <Drawer.Screen name="Buy" component={Buys} />
  //       <Drawer.Screen name="Logout" component={Logouts} />
  //     </Drawer.Navigator>
  //   );
  // };

  const handleLogout = () => {
    navigation.navigate("Login");
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Homes"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.boxIcon}>
              <MaterialCommunityIcons
                name="home-account"
                color={focused ? "black" : color}
                size={size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Carts}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.boxIcon}>
              <MaterialCommunityIcons
                name="cart-arrow-right"
                color={focused ? "black" : color}
                size={size}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="AddProduct"
        component={Add}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.boxIcon}>
              <MaterialCommunityIcons
                name="plus-box"
                color={focused ? "black" : color}
                size={size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Nofitication"
        component={Notifica}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.boxIcon}>
              <MaterialCommunityIcons
                name="bell"
                color={focused ? "black" : color}
                size={size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.boxIcon}>
              <MaterialCommunityIcons
                name="account"
                color={focused ? "black" : color}
                size={size}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Forgotpw" component={ForgotPassword} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="AddProduct" component={Add} />
        <Stack.Screen name="Search" component={Searchs} />
        <Stack.Screen name="Message" component={Messages} />
        <Stack.Screen name="Buy" component={Buys} />
        <Stack.Screen name="Otp" component={OTPScreen} />
        <Stack.Screen name="Otpfgpw" component={Otpw} />
        <Stack.Screen name="ForgotPassword" component={ForgotPass} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Info" component={Infomation} />
        <Stack.Screen name="Logout" component={Logouts} />
        <Stack.Screen name="Maps" component={Map} />
        <Stack.Screen name="Oders" component={Oder} />
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator} // Sử dụng BottomTabNavigator là một trong các màn hình
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
