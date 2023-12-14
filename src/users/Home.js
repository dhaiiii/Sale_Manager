import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

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

const { width: ScreenWidth } = Dimensions.get("window");
const HomeScreen = () => {
  const [dssp, setDssp] = useState(sampleData);
  const [bnData, setBnData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % bnData.length;
      setCurrentIndex(nextIndex);
      scrollViewRef.current.scrollTo({
        animated: true,
        x: ScreenWidth * nextIndex,
      });
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, bnData]);

  const scrollViewRef = useRef();

  useEffect(() => {
    const bannerData = [
      {
        id: "1",
        image: require("../image/banner-2-1400x630.jpg"),
      },
      {
        id: "2",
        image: require("../image/banner-thoi-trang-nam-dep-tm-luxury.jpg"),
      },
      {
        id: "3",
        image: require("../image/banner-thoi-trang.jpg"),
      },
      {
        id: "4",
        image: require("../image/banner-do-shop-thoi-trang-nam-tphcm-tmluxury.jpg"),
      },
    ];
    setBnData(bannerData);
  }, []);

  const handleSearch = () => {
    // Implement your search logic here
  };
  // useEffect(() => {
  //   // Hàm async để gọi API
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://10.6.51.201:4000/product/getimageId",
  //         {
  //           // productId,
  //           // imageId,
  //         }
  //       );
  //       setDssp(response.data);
  //     } catch (error) {
  //       console.error("Lỗi khi gọi API:", error);
  //     }
  //   };

  //   // Gọi hàm fetchData để lấy dữ liệu từ API
  //   fetchData();
  // }, []);

  return (
    <View style={styles.container}>
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
        numColumns={2}
        ListHeaderComponent={() => (
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              ref={scrollViewRef}
              pagingEnabled
              onMomentumScrollEnd={(event) => {
                const contentOffset = event.nativeEvent.contentOffset;
                const index = Math.round(contentOffset.x / ScreenWidth);
                setCurrentIndex(index);
              }}
              contentContainerStyle={{
                width: ScreenWidth * bnData.length,
                height: 150,
              }}
            >
              {bnData.map((item) => (
                <Image
                  key={item.id}
                  source={item.image}
                  resizeMode="stretch"
                  style={{
                    width: ScreenWidth,
                    height: 150,
                    borderRadius: 10,
                    resizeMode: "cover",
                  }}
                />
              ))}
            </ScrollView>

            <View style={styles.banner}>
              <Image
                source={require("../image/banner-thoi-trang-nam-dep-tm-luxury.jpg")}
                style={styles.bannerImage}
              />
              <Image
                source={require("../image/Mau-banner-quang-cao-dep-1.png")}
                style={styles.bannerImage}
              />
              <Image
                source={require("../image/banner-2-1400x630.jpg")}
                style={styles.bannerImage}
              />
              <Image
                source={require("../image/tt4-1024x406.png")}
                style={styles.bannerImage}
              />
            </View>
          </View>
        )}
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
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "white",
  },
  banner: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  bannerImage: {
    flex: 1,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 5,
    resizeMode: "cover",
  },
  productContainer: {
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e4e4e4",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: "white",
    flex: 1,
    maxWidth: "50%",
  },
  heading: {
    marginTop: 150,
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
