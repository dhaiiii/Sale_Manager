import React from "react";
import { View, Text, FlatList, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const navigation = useNavigation();

  const cartItems = [
    {
      id: "1",
      Image: "https://laptop88.vn/media/news/2910_hinhanhmaytinhxachtay4.jpg",
      name: "Laptop siêu gọn",
      address: "Hà Nội",
      price: 10,
    },
    {
      id: "2",
      Image:
        "https://product.hstatic.net/1000311467/product/au6-18_6bb873d905414036bd60c6af4390f7a2_master.jpg",
      name: "Quần âu thời trang",
      address: "Hà Nội",
      price: 15,
    },
    {
      id: "3",
      Image:
        "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/18TS22S137.jpg",
      name: "Áo phông siêu đẹp",
      address: "Hà Nội",
      price: 20,
    },
  ];

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Shopping Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.Image }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemAddress}>{item.address}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
          </View>
        )}
      />
      <Text style={styles.totalPrice}>Total: ${totalPrice}</Text>
      <Button
        title="Checkout"
        onPress={() => {
          navigation.navigate("Buy");
          console.log("Checkout button pressed");
        }}
        color="#007bff"
      />
    </View>
  );
};

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

export default Cart;
