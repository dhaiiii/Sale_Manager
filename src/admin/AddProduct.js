import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ImageView,
  StyleSheet,
} from "react-native";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";

const Add = ({ navigation, route }) => {
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState(0);
  const [AddressProduct, setAddressProduct] = useState("");
  const [Description, setDescription] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [Category_id, setCategory_id] = useState("");

  useEffect(() => {
    if (route.params?.refresh) {
      // Làm mới trường nhập liệu
      setName("");
      setPrice(0);
      setAddressProduct("");
      setDescription("");
      setimageUrl("");
      setCategory_id("");
    }
  }, [route.params?.refresh]);

  const SaveProduct = async () => {
    try {
      const response = await axios.post(
        "http://0.0.0.0:4000/product/addproduct",
        {
          Name,
          Price,
          AddressProduct,
          Description,
          imageUrl,
          Category_id,
        }
      );

      console.log(response.data);
      if (response.status === 200) {
        console.log("Thêm sản phẩm thành công");
        Alert.alert("Thêm sản phẩm thành công");
        navigation.navigate("Home");
      } else {
        console.log("Thêm sản phẩm thất bại. Mã lỗi:", response.status);
        Alert.alert("Lỗi", "Có lỗi xảy ra khi thêm sản phẩm");
      }
    } catch (error) {
      console.log("Lỗi khi thêm sản phẩm:", error);
      Alert.alert("Lỗi", "Đã xảy ra lỗi khi thêm sản phẩm.");
    }
  };

  return (
    <View>
      <Text
        style={{ marginLeft: 170, color: "red", fontSize: 20, marginTop: 30 }}
      >
        Thêm sp
      </Text>
      <View style={styles.productContainer}>
        <TextInput
          placeholder="Tên Sp"
          onChangeText={(txt) => {
            setName(txt);
          }}
        />

        <TextInput
          placeholder="Giá Sp"
          onChangeText={(txt) => {
            setPrice(txt);
          }}
        />
        <TextInput
          placeholder="Địa chỉ"
          onChangeText={(txt) => {
            setAddressProduct(txt);
          }}
        />
        <TextInput
          placeholder="Giới thiệu sản phẩm"
          onChangeText={(txt) => {
            setDescription(txt);
          }}
        />
        <TextInput
          placeholder="Link ảnh sản phẩm"
          onChangeText={(txt) => {
            setimageUrl(txt);
          }}
        />
      </View>

      <Button title="Save" onPress={SaveProduct} />
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  productContainer: {
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: "white",
  },
});
