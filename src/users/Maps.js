import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";

const Map = ({ navigation }) => {
  const [region, setRegion] = useState({
    latitude: 21.03184874133383,
    longitude: 105.8264216163481,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  const handleZoomIn = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta * 0.9,
      longitudeDelta: region.longitudeDelta * 0.9,
    });
  };

  const handleZoomOut = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta / 0.9,
      longitudeDelta: region.longitudeDelta / 0.9,
    });
  };
  const handleRegionChangeComplete = (newRegion) => {
    // Cập nhật vị trí hiện tại khi kết thúc thay đổi vùng
    setRegion(newRegion);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={region}
        onRegionChangeComplete={handleRegionChangeComplete}
      />
      <View
        style={{
          position: "absolute",
          bottom: 16,
          flexDirection: "column",
          justifyContent: "flex-end",
          alignSelf: "flex-end",
          margin: 16,
        }}
      >
        <TouchableOpacity
          onPress={handleZoomIn}
          style={{
            flex: 1, // Sử dụng flex để cả hai ô có kích thước bằng nhau
            padding: 10,
            backgroundColor: "white",
            borderRadius: 8,
            marginBottom: 10,
            marginRight: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleZoomOut}
          style={{
            flex: 1, // Sử dụng flex để cả hai ô có kích thước bằng nhau
            padding: 10,
            backgroundColor: "white",
            borderRadius: 8,
            marginRight: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Map;
