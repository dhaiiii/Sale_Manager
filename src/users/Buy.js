import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Buys = () => {
  const buyData = [
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
      info: "Tm Luxury được thành lập năm 2012 với cửa hàng tại địa chỉ tại 120A Lê Văn Lương, Tân Hưng, Quận 7 TPHCM. Cho đến nay, sau 7 năm trong lĩnh vực kinh doanh thời trang nam, Tm đã dần khẳng định được vị thế của mình và được giới trẻ Sài Thành vô cùng yêu thích. Shop bán quần áo TM có đa các mặt hàng thời trang cao cấp cho nam giới như quần jean nam, quần jogger, áo khoác nam, áo sơ mi nam, phụ kiện giày thể thao,…đủ loại đủ size số phù hợp với nhiều đối tượng. Bạn mua hàng của Tm một lần rồi bạn sẽ thật khó có thể tìm được Shop thời trang nam tại Quận Phú Nhuận TPHCM nào uy tín và chất như Tm shop.",
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thanh toán</Text>
      <View style={styles.buyContainer}>
        <Text style={styles.buyText}>Địa chỉ nhận hàng: {buyData.address}</Text>
        <Text style={styles.buyText}>Tên sản phẩm: {buyData.name}</Text>
        <Text style={styles.buyText}>Giá sản phẩm: {buyData.price}</Text>
        <Text style={styles.buyText}>Địa chỉ: {buyData.address}</Text>
        <Text style={styles.buyText}>
          Giới thiệu sản phẩm:{"\n"} {buyData.info}
        </Text>
        <Image source={{ uri: buyData.Image }} style={styles.buyImage} />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => alert("Payment pressed")}
        >
          <Text style={styles.buttonText}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Buys;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  title: {
    alignSelf: "center",
    color: "red",
    fontSize: 24,
    marginVertical: 10,
  },
  buyContainer: {
    borderWidth: 1,
    borderColor: "#f50057",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    backgroundColor: "white",
  },
  buyText: {
    fontSize: 16,
    marginBottom: 10,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f50057",
  },
  buyImage: {
    marginTop: 15,
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: "#f50057",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
