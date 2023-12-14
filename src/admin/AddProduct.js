import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ImageView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import { launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Add = ({ navigation, route }) => {
  const token = route.params?.token;

  const [Name, setName] = useState("");
  const [Price, setPrice] = useState();
  const [Description, setDescription] = useState("");
  const [AddressProduct, setAddressProduct] = useState("");
  const [imageUrl, setimageUrl] = useState(
    "https://laptop88.vn/media/news/2910_hinhanhmaytinhxachtay4.jpg"
  );
  const [Category_id, setCategory_id] = useState();

  const openGallery = async () => {
    console.log("PRESS ==========>>>>2");
    const result = await ImagePicker.launchImageLibraryAsync();
    setimageUrl(result?.assets[0].uri);
    console.log("RESULT =====>>>>", result);
    if (result.cancelled) {
      // Thay đổi từ khóa "cancelled" thành "canceled"
      console.log("Chọn ảnh đã bị hủy");
    }
  };
  useEffect(() => {
    console.log("đã truyền qua :", token);
  }, [token]);

  useEffect(() => {
    if (route.params?.refresh) {
      // Làm mới trường nhập liệu
      setName("");
      setPrice();
      setAddressProduct("");
      setDescription("");
      setimageUrl("");
      setCategory_id();
    }
  }, [route.params?.refresh]);

  const datajson = {
    Name: Name,
    Price: Price,
    AddressProduct: AddressProduct,
    Description: Description,
    Category_id: Category_id,
  };

  const SaveProduct = async () => {
    console.log("Datajson:", datajson);
    console.log("ImageUrl:", imageUrl);

    try {
      const tokenFromAsyncStorage = await AsyncStorage.getItem("token");
      console.log("Token đã lấy từ AsyncStorage:", tokenFromAsyncStorage);

      const response = await axios.post(
        "http://10.6.52.54:4000/product/addproduct",
        {
          imageUrl,
          datajson,
        },
        {
          headers: {
            Authorization: `Bearer ${tokenFromAsyncStorage}`,
          },
        }
      );

      console.log("Server Response:", response);

      if (response.status === 200) {
        console.log("Thêm sản phẩm thành công");
        Alert.alert("Thêm sản phẩm thành công");
        navigation.navigate("Home");
      } else {
        console.log("Thêm sản phẩm thất bại. Mã lỗi:", response.status);
        console.log("Error message:", response.data.error);
        Alert.alert("Lỗi", "Có lỗi xảy ra khi thêm sản phẩm");
      }
    } catch (error) {
      console.log("Lỗi khi thêm sản phẩm:", error);
      console.log(
        "Status code:",
        error.response ? error.response.status : "N/A"
      );
      console.log(
        "Error message:",
        error.response ? error.response.data.error : "N/A"
      );
      Alert.alert("Lỗi", "Đã xảy ra lỗi khi thêm sản phẩm.");
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{ marginLeft: 170, color: "red", fontSize: 20, marginTop: 30 }}
      >
        Thêm sp
      </Text>
      <View style={styles.productContainer}>
        <TextInput
          placeholder="ID"
          keyboardType="numeric" // Thiết lập kiểu bàn phím để chỉ cho phép nhập số
          onChangeText={(txt) => {
            // Chuyển giá trị nhập vào thành kiểu int
            const categoryId = parseInt(txt);
            setCategory_id(categoryId);
          }}
        />

        <TextInput
          placeholder="Tên Sp"
          onChangeText={(txt) => {
            setName(txt);
          }}
        />
        <TextInput
          placeholder="Giá Sp"
          keyboardType="numeric" // Thiết lập kiểu bàn phím để chỉ cho phép nhập số
          onChangeText={(txt) => {
            // Chuyển giá trị nhập vào thành kiểu float
            const price = parseFloat(txt);
            setPrice(price);
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
        <Image
          resizeMode="contain"
          style={styles.img}
          source={{
            uri: imageUrl,
          }}
        />
        <TouchableOpacity onPress={openGallery} style={styles.lib}>
          <Text style={styles.btn}>Open Gallery</Text>
        </TouchableOpacity>
      </View>

      <Button title="Save" onPress={SaveProduct} color={"#f50057"} />
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productContainer: {
    borderWidth: 1,
    borderColor: "#f50057",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: "white",
  },
  img: {
    width: "90%",
    height: 300,
    alignSelf: "center",
  },
  lib: {
    top: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
    borderRadius: 6,
    backgroundColor: "#f50057",
  },
  btn: {
    color: "#fff",
  },
});
