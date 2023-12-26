import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import * as SecureStore from "expo-secure-store";

const Add = ({ navigation, route }) => {
  const [token, setToken] = useState("");
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState();
  const [Description, setDescription] = useState("");
  const [AddressProduct, setAddressProduct] = useState("");
  const [imageUrl, setimageUrl] = useState(
    "https://laptop88.vn/media/news/2910_hinhanhmaytinhxachtay4.jpg"
  );
  const [Category_id, setCategory_id] = useState();

  useEffect(() => {
    // Lấy token từ SecureStore khi màn hình được tạo
    retrieveToken();
  }, []);

  const retrieveToken = async () => {
    try {
      // Lấy giá trị từ SecureStore
      const storedToken = await SecureStore.getItemAsync("token");

      if (storedToken !== null) {
        // Nếu giá trị tồn tại, cập nhật state
        setToken(storedToken);
      } else {
        console.log("Không tìm thấy token trong SecureStore.");
      }
    } catch (error) {
      console.error("Lỗi khi lấy token từ SecureStore:", error);
    }
  };

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    setimageUrl(result?.assets[0].uri);
    if (result.canceled) {
      console.log("Chọn ảnh đã bị hủy");
    }
  };

  const SaveProduct = async () => {
    console.log("Mã token được lấy từ SecureStore:", token);

    const datajson = {
      Name: Name,
      Price: Price,
      AddressProduct: AddressProduct,
      Description: Description,
      Category_id: Category_id,
    };

    try {
      console.log(datajson);
      console.log(imageUrl);
      console.log(token);

      const response = await axios.post(
        "http://172.20.10.2:4000/product/addproduct",
        {
          imageUrl,
          datajson,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Server Response:", response.data);

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
    <View style={styles.container}>
      <Text
        style={{ marginLeft: 170, color: "red", fontSize: 20, marginTop: 30 }}
      >
        Thêm sp
      </Text>
      <View style={styles.productContainer}>
        <TextInput
          placeholder="ID"
          keyboardType="numeric"
          onChangeText={(txt) => {
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
          keyboardType="numeric"
          onChangeText={(txt) => {
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
