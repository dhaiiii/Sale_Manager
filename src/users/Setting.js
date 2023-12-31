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
      <TouchableOpacity style={styles.bn}>
        <View style={styles.itemContainer}>
          <View style={styles.profileContainer}>
            <Image
              style={styles.profileImage}
              source={require("../image/anh6.jpg")} // Thay đổi đường dẫn đến ảnh của bạn
            />
            <View style={styles.profileInfo}>
              <Text style={{ color: "white" }}>Đỗ Hải</Text>
              {/* Các thông tin cá nhân khác */}
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.info} onPress={handleInfo}>
        <View style={styles.itemContainer}>
          <Icon name="person" size={20} />
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
          <Icon name="logout" size={20} />
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
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  profileImage: {
    width: 80, // Điều chỉnh kích thước ảnh
    height: 80,
    borderRadius: 50, // Để tạo hình tròn, hãy đặt borderRadius là một nửa của chiều cao hoặc chiều rộng
    marginRight: 10,
  },

  profileInfo: {
    flex: 1, // Để nội dung có thể mở rộng để lấp đầy không gian còn lại
  },
  bn: {
    height: 100,
    fontWeight: "bold", // Chữ đậm
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f50057",
    backgroundColor: "#f50057",
    color: "white",
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
