import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const sampleData = [
  {
    id: "1",
    name: "Quần Âu nam",
    price: "100 USD",
    address: "Hà nội",
    Image:
      "https://product.hstatic.net/1000311467/product/au6-18_6bb873d905414036bd60c6af4390f7a2_master.jpg",
  },
  {
    id: "2",
    name: "Áo phông nam",
    price: "200 USD",
    address: "Bắc Ninh",
    Image:
      "https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/18TS22S137.jpg",
  },
  {
    id: "3",
    name: "Áo phông đẹp",
    price: "200.000 VND",
    address: "Hà nội",
    Image:
      "https://lzd-img-global.slatic.net/g/p/5905e70c1bb461ad992fdf696fd4ab34.jpg_360x360q75.jpg_.webp",
  },
  {
    id: "4",
    name: "Áo mùa đông",
    price: "100.000 VND",
    address: "Hà Nội",
    Image:
      "https://vn-test-11.slatic.net/original/8ad66705b979179eb3e0dc2749db75b5.jpg",
  },
  {
    id: "5",
    name: "Laptop acer",
    price: "100.000 VND",
    address: "Hà Nội",
    Image:
      "https://fptshop.com.vn/uploads/originals/2020/9/29/637369735917636373_huong-dan-cach-cai-dat-hinh-nen-may-tinh-win-10-don-gian-8.jpg",
  },
  {
    id: "6",
    name: "Acer nitro5",
    price: "23.000.000 VND",
    address: "Hà Nội",
    Image:
      "https://mega.com.vn/media/news/1025_cach_cai_hinh_nen_may_tinh_vo_cung_don_gian.jpg",
  },
  {
    id: "7",
    name: "PC siêu đẹp",
    price: "100.000 VND",
    address: "Hà Nội",
    Image:
      "https://cdn.24h.com.vn/upload/1-2022/images/2022-01-14/image2-1642131611-766-width650height400.jpg",
  },
  {
    id: "8",
    name: "PC dell",
    price: "100.000 VND",
    address: "Hà Nội",
    Image:
      "https://cdn.tgdd.vn/Files/2018/09/26/1120348/vi-sao-nen-mua-man-hinh-3d-cho-may-tinh-pc--3.jpg",
  },
];

const HomeScreen = () => {
  const [dssp, setDssp] = useState(sampleData);
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();

  const handleSearch = () => {
    // Implement your search logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Danh sách sản phẩm</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={dssp}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ProductDetail", {
                productDetailData: item,
              });
            }}
            style={styles.productContainer}
          >
            <Image source={{ uri: item.Image }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <Text style={styles.productAddress}>{item.address}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e4e4e4",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: "white",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 90,
    marginTop: 10,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#e4e4e4",
    borderRadius: 10,
    padding: 10,
    height: 40,
  },
  searchButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: "#f50057",
    borderRadius: 10,
  },
  searchButtonText: {
    color: "white",
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    color: "#f50057",
    fontWeight: "bold",
  },
  productAddress: {
    fontSize: 16,
    color: "#777777",
  },
});

export default HomeScreen;
