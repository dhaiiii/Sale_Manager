import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProductDetail from "./ProductDetail"; // Import ProductDetail

const Cart = ({ route }) => {
  const navigation = useNavigation();
  const { productDetailData } = route.params || {};

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (productDetailData) {
      setCartItems((prevItems) => [...prevItems, productDetailData]);
    }
  }, [productDetailData]);

  const handleBuy = () => {
    navigation.navigate("Buy");
  };
  const handleRemoveItem = (itemId) => {
    // Lọc ra các sản phẩm không có itemId để xóa sản phẩm có itemId
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Shopping Cart</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.Image }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemAddress}>{item.address}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
            <Button
              title="Remove"
              onPress={() => handleRemoveItem(item.id)}
              color="#ff4500"
            />
          </View>
        )}
      />

      <Text style={styles.totalPrice}>Total: ${totalPrice}</Text>
      <Button title="Checkout" onPress={handleBuy} color="#f50057" />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  itemImage: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  itemInfo: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  cartItem: {
    flexDirection: "row",
    marginBottom: 12,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  itemAddress: {
    fontSize: 14,
    color: "#555",
  },
  itemPrice: {
    fontSize: 18,
    color: "#555",
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    color: "#333",
  },
});
