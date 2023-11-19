import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductDetail = ({ route }) => {
  const { productDetailData } = route.params;
  const navigation = useNavigation();

  const handleCart = () => {
    // Truyền thông tin sản phẩm cần thêm vào giỏ hàng và chuyển đến màn hình Cart
    navigation.navigate("Cart", { productDetailData });
  };

  const handleBuy = () => {
    navigation.navigate("Buy");
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
      <TouchableOpacity style={styles.cartButton} onPress={handleCart}>
        <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
        <Text style={styles.buttonText}>Mua ngay</Text>
      </TouchableOpacity>
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
    backgroundColor: "#f50057",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  buyButton: {
    backgroundColor: "#f50057",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default ProductDetail;
