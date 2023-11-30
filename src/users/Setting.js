import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

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
          <Text style={styles.boldText}> Thông tin cá nhân</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.info} onPress={""}>
        <View style={styles.itemContainer}>
          <Icon name="shopping-basket" size={20} />
          <Text style={styles.boldText}>Đơn mua</Text>
          <View style={styles.historyContainer}>
            <Text style={styles.lightText}> Xem lịch sử mua hàng</Text>
            <Icon name="arrow-forward-ios" size={20} style={styles.icons} />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.containers}>
        <TouchableOpacity style={styles.order}>
          <View style={styles.innerBox}>
            <Icon name="hourglass-bottom" size={20} style={styles.icons} />
            <Text style={styles.orderText}>Chờ xác nhận</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.order}>
          <View style={styles.innerBox}>
            <Icon name="hourglass-top" size={20} style={styles.icons} />
            <Text style={styles.orderText}>Chờ lấy hàng</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.order}>
          <View style={styles.innerBox}>
            <Icon name="local-shipping" size={20} style={styles.icons} />
            <Text style={styles.orderText}>Đang giao</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.info} onPress={""}>
        <View style={styles.itemContainer}>
          <Icon name="schedule" size={20} />
          <Text style={styles.boldText}>Đã xem gần đây</Text>
          <Icon
            name="arrow-forward-ios"
            size={20}
            style={[styles.icons, styles.arrowIcon]}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logout} onPress={handleLogout}>
        <View style={styles.itemContainer}>
          <Image source={require("../image/logout.jpg")} style={styles.icon} />
          <Text style={styles.boldText}> Logout</Text>
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
  txt: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrowIcon: {
    marginLeft: "auto",
  },
  historyContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  boldText: {
    fontWeight: "bold", // Chữ đậm
    marginRight: 120,
  },
  lightText: {
    color: "grey", // Màu chữ nhạt
    marginRight: 10,
  },
  itemContainer: {
    fontWeight: "bold", // Chữ đậm
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
    fontWeight: "bold", // Chữ đậm
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
  containers: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  order: {
    flex: 1,
    padding: 10,
    margin: 10,
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f50057",
  },
  innerBox: {
    flex: 1,
    // Các kiểu cho phần tử con ở bên trong TouchableOpacity
  },
  orderText: {
    color: "grey",
    fontSize: 15,
    marginTop: 10,
    textAlign: "center", // Đưa văn bản ra giữa theo chiều ngang
  },
  icons: {
    color: "grey",
    alignSelf: "center",
  },
});

export default SettingScreen;
