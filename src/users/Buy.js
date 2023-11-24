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

const Buys = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thanh toán</Text>
      <View style={styles.buyContainer}>
        <Text style={styles.buyText}>Địa chỉ nhận hàng:</Text>
        <Text style={styles.buyText}>Tên sản phẩm: </Text>
        <Text style={styles.buyText}>Giá sản phẩm:</Text>
        <Text style={styles.buyText}>Địa chỉ: </Text>
        <Text style={styles.buyText}>Phương thức thanh toán:{"\n"}</Text>
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
});
