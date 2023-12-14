import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductDetail = ({ route }) => {
  const { productDetailData } = route.params;
  const navigation = useNavigation();

  const handleCart = () => {
    navigation.navigate("Cart", { productDetailData });
    route.params.productDetailData = null;
  };

  const handleBuy = () => {
    navigation.navigate("Buy", { productDetailData });
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: productDetailData.Image }}
        style={styles.productDetailImage}
      />
      <View style={styles.productDetailContainer}>
        <Text style={styles.productDetailText}>
          Tên sản phẩm: {productDetailData.name}
        </Text>
        <Text style={styles.productDetailText}>
          Giá sản phẩm: {productDetailData.price}
        </Text>
        <Text style={styles.productDetailText}>
          Địa chỉ: {productDetailData.address}
        </Text>
        <Text style={styles.productDetailText}>
          Giới thiệu sản phẩm:{"\n"} {productDetailData.info}
        </Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity style={styles.cartButton} onPress={handleCart}>
          <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
          <Text style={styles.buttonText}>Mua ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  productDetailContainer: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
  },
  productDetailImage: {
    width: "100%",
    height: 300,
  },
  productDetailText: {
    fontSize: 16,
    marginTop: 10,
  },
  cartButton: {
    flex: 1, // Chia đều không gian ngang giữa các thành phần con
    backgroundColor: "#f50057", // Màu nền của nút
    padding: 10, // Khoảng cách nút và văn bản bên trong
    marginHorizontal: 5, // Khoảng cách giữa các nút
    borderRadius: 5,
  },
  buyButton: {
    flex: 1, // Chia đều không gian ngang giữa các thành phần con
    backgroundColor: "#f50057", // Màu nền của nút
    padding: 10, // Khoảng cách nút và văn bản bên trong
    marginHorizontal: 5, // Khoảng cách giữa các nút
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  btn: {
    flexDirection: "row", // Đặt hướng của layout là ngang
    justifyContent: "space-around", // Cân đối các thành phần con
    alignItems: "center", // Căn giữa theo chiều dọc
    marginVertical: 10,
  },
});

export default ProductDetail;
