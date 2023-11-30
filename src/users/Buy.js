import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Buys = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thanh toán</Text>
      <View style={styles.buyContainer}>
        <TouchableOpacity style={styles.info} onPress={""}>
          <View style={styles.itemContainer}>
            <Icon name="place" size={20} />
            <Text style={styles.boldText}>Địa chỉ nhận hàng:</Text>
            <Icon
              name="arrow-forward-ios"
              size={20}
              style={[styles.icons, styles.arrowIcon]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.info} onPress={""}>
          <View style={styles.itemContainer}>
            <Icon name="shopping-cart" size={20} />
            <Text style={styles.boldText}>Tên sản phẩm:</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.info} onPress={""}>
          <View style={styles.itemContainer}>
            <Icon name="attach-money" size={20} />
            <Text style={styles.boldText}>Giá sản phẩm:</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.info} onPress={""}>
          <View style={styles.itemContainer}>
            <Icon name="payment" size={20} />
            <Text style={styles.boldText}>Phương thức thanh toán</Text>
            <Icon
              name="arrow-forward-ios"
              size={20}
              style={[styles.icons, styles.arrowIcon]}
            />
          </View>
        </TouchableOpacity>
        <Image style={styles.buyImage} />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => alert("Payment pressed")}
        >
          <Text style={styles.buttonText}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Buys;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  info: {
    width: 320,
    height: 50,
    fontWeight: "bold", // Chữ đậm
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f50057",
  },
  arrowIcon: {
    marginLeft: "auto",
  },
  itemContainer: {
    fontWeight: "bold", // Chữ đậm
    flexDirection: "row",
    alignItems: "center",
  },
  boldText: {
    fontWeight: "bold", // Chữ đậm
    marginRight: 120,
  },
  title: {
    alignSelf: "center",
    color: "red",
    fontSize: 24,
    marginVertical: 10,
  },
  buyContainer: {
    borderWidth: 1,
    borderColor: "#f50057",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    backgroundColor: "white",
  },
  buyText: {
    width: 300,
    fontSize: 16,
    marginBottom: 10,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f50057",
  },
  buyImage: {
    marginTop: 15,
    width: "100%",
    height: 200,
    borderRadius: 10,
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
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icons: {
    marginRight: 10,
  },
});
