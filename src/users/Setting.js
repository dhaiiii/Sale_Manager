import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SettingScreen = () => {
  const navigation = useNavigation();

  const handleInfo = () => {
    navigation.navigate("Info");
  };

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.info} onPress={handleInfo}>
        <View style={styles.itemContainer}>
          <Image source={require("../image/images.png")} style={styles.icon} />
          <Text> Thông tin cá nhân</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logout} onPress={handleLogout}>
        <View style={styles.itemContainer}>
          <Image
            source={require("../image/pngtree-box-logout-icon-vectors-png-image_1737862.jpg")}
            style={styles.icon}
          />
          <Text> Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 20, // Điều chỉnh kích thước của ảnh
    height: 20,
    marginRight: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  info: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f50057",
  },
  logout: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f50057",
  },
});

export default SettingScreen;
