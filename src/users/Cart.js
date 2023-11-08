import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Cart = ({ navigation }) => {
  return (
    <View style={styles.banner}>
      <Text>Giỏ hàng</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    fontSize: "20px",
  },
});

export default Cart;
