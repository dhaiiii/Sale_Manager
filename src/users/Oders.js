import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Order = () => {
  const navigation = useNavigation("");
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);

  const handleSelectPayment1 = () => {
    setIsSelected1(!isSelected1);
    setIsSelected2(false);
  };

  const handleSelectPayment2 = () => {
    setIsSelected1(false);
    setIsSelected2(!isSelected2);
  };
  const handleConfirmOrder = () => {
    if (isSelected1) {
      // Đơn hàng đã được nhận khi thanh toán khi nhận hàng
      Alert.alert("Thông báo", "Đơn hàng đã được nhận!");
      navigation.navigate("Buy");
    } else if (isSelected2) {
      // Xử lý logic cho thanh toán qua ngân hàng
      // ...
      // Sau khi xử lý, hiển thị thông báo
      Alert.alert("Thông báo", "Đơn hàng đã được nhận!");
    } else {
      Alert.alert("Thông báo", "Vui lòng chọn phương thức thanh toán");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logout}>
        <View style={styles.itemContainer}>
          <Icon
            onPress={handleSelectPayment1}
            name={
              isSelected1 ? "radio-button-checked" : "radio-button-unchecked"
            }
            size={20}
            color={isSelected1 ? "black" : "gray"}
          />
          <Text style={styles.boldText}>Thanh toán khi nhận hàng</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logout}>
        <View style={styles.itemContainer}>
          <Icon
            onPress={handleSelectPayment2}
            name={
              isSelected2 ? "radio-button-checked" : "radio-button-unchecked"
            }
            size={20}
            color={isSelected2 ? "black" : "gray"}
          />
          <Text style={styles.boldText}>Thanh toán qua ngân hàng</Text>
          <Icon
            name="arrow-forward-ios"
            size={20}
            style={[styles.icons, styles.arrowIcon]}
          />
        </View>
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: "flex-end", bottom: 10 }}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleConfirmOrder}
        >
          <Text style={styles.buttonText}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  icons: {
    marginRight: 10,
  },
  arrowIcon: {
    marginLeft: "auto",
  },
  logout: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f50057",
  },
  itemContainer: {
    fontWeight: "bold", // Chữ đậm
    flexDirection: "row",
    alignItems: "center",
  },
  boldText: {
    marginLeft: 10,
  },
  buttonContainer: {
    backgroundColor: "#f50057",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
