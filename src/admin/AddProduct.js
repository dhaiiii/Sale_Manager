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
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const Add = ({ navigation, route }) => {
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState(0);
  const [AddressProduct, setAddressProduct] = useState("");
  const [Description, setDescription] = useState("");
  const [imageUrl, setimageUrl] = useState(
    "https://laptop88.vn/media/news/2910_hinhanhmaytinhxachtay4.jpg"
  );
  const [Category_id, setCategory_id] = useState("");

  const openCamera = async () => {
    console.log("PRESS ==========>>>>");
    const result = await launchCamera();
    setimageUrl(result?.assets[0].uri);
    console.log("RESULT =====>>>>", result);
  };
  const openGallery = async () => {
    console.log("PRESS ==========>>>>2");
    const result = await launchImageLibrary();
    setimageUrl(result?.assets[0].uri);
    console.log("RESULT =====>>>>", result);
  };

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
    const datajson = {
      Name,
      Price,
      AddressProduct,
      Description,
      Category_id,
    };
    try {
      const response = await axios.post(
        "http://192.168.2.167:4000/product/addproduct",
        {
          datajson,
          imageUrl,
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
    <View style={styles.container}>
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
        <Image
          resizeMode="contain"
          style={styles.img}
          source={{
            uri: imageUrl,
          }}
        />
        <TouchableOpacity onPress={openCamera} style={styles.Camera}>
          <Text style={styles.btn}>Open camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openGallery} style={styles.lib}>
          <Text style={styles.btn}>Open Gallery</Text>
        </TouchableOpacity>
      </View>

      <Button title="Save" onPress={SaveProduct} />
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
    borderColor: "green",
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
  Camera: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
    borderRadius: 6,
    backgroundColor: "green",
  },
  lib: {
    top: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
    borderRadius: 6,
    backgroundColor: "green",
  },
  btn: {
    color: "#fff",
  },
});
