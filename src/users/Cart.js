import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProductDetail from "./ProductDetail";
import Icon from "react-native-vector-icons/MaterialIcons";

const Cart = ({ route }) => {
  const navigation = useNavigation();
  const { productDetailData } = route.params || {};

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (productDetailData) {
      setCartItems((prevItems) => [
        ...prevItems,
        { ...productDetailData, quantity: 1 },
      ]);
    }
  }, [productDetailData]);

  useEffect(() => {
    const updatedTotalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(updatedTotalPrice);
  }, [cartItems]);

  const handleBuy = () => {
    navigation.navigate("Buy");
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === itemId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return null;
        }
        return item;
      })
      .filter(Boolean);

    setCartItems(updatedCart);
  };

  const handleIncreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartItems(updatedCart);
  };

  const handleProductDetail = (item) => {
    navigation.navigate("ProductDetail", { productDetailData: item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Shopping Cart</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            style={styles.cartItem}
            onPress={() => handleProductDetail(item)}
          >
            <Image source={{ uri: item.Image }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemAddress}>{item.address}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                <Icon name="remove" size={20} style={styles.quantityButton} />
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => handleIncreaseQuantity(item.id)}>
                <Icon name="add" size={20} style={styles.quantityButton} />
              </TouchableOpacity>
            </View>
            <Icon
              name="close"
              size={20}
              onPress={() => handleRemoveItem(item.id)}
              style={{ marginLeft: "auto", color: "red" }}
            />
          </TouchableOpacity>
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
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
  },
  quantityButton: {
    color: "#007BFF",
    marginLeft: 5,
    marginRight: 5,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 8,
  },
});
