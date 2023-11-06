// Cart.js
import React from "react";
import { View, Text, Button, FlatList } from "react-native";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <View>
      <Text>Giỏ hàng:</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.name} - {item.price}$
            </Text>
            <Button
              title="Xóa khỏi giỏ hàng"
              onPress={() => removeFromCart(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Cart;
