import React, { useRef, useState, useEffect } from "react";
import { Alert, TextInput, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const Otp = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { us } = route.params;
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();

  const [opt1, setOtp1] = useState("");
  const [opt2, setOtp2] = useState("");
  const [opt3, setOtp3] = useState("");
  const [opt4, setOtp4] = useState("");
  const [count, setCount] = useState(60);

  const resendOtp = async () => {
    try {
      const response = await axios.post(
        "http://10.6.52.54:4000/users/verifyotp",
        {
          username: us,
        }
      );

      if (response.status === 200) {
        // API call was successful
        setCount(60); // Đặt lại đồng hồ đếm về 60 giây
        Alert.alert("Mã OTP mới đã được gửi.");
      } else {
        // API call failed
        Alert.alert("Gửi lại mã OTP thất bại.");
      }
    } catch (error) {
      console.error("API call error:", error);
      Alert.alert("Lỗi khi gọi API.");
    }
  };

  const saveToken = async (token) => {
    try {
      // Lưu mã token vào SecureStore
      await SecureStore.setItemAsync("token", token);
      console.log("Mã token đã được lưu:", token);
    } catch (error) {
      console.error("Lỗi khi lưu mã token:", error);
    }
  };

  const otpValidate = async () => {
    let enteredOtp = opt1 + opt2 + opt3 + opt4;
    console.log({
      username: us,
      OtpCode: enteredOtp,
    });
    try {
      const response = await axios.post(
        "http://172.20.10.2:4000/users/verifyotp",
        {
          username: us,
          OtpCode: enteredOtp,
        }
      );

      if (response.status === 200) {
        // API call was successful
        const data = response.data;
        // Process the data as needed
        saveToken(data.token);
        await SecureStore.setItemAsync("token", data.token);

        Alert.alert("Mã otp đúng");
        navigation.navigate("Home");
      } else {
        // API call failed
        Alert.alert("API call failed");
      }
    } catch (error) {
      console.error("API call error:", error);
      Alert.alert("API call error");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <View style={styles.otpView}>
        <TextInput
          ref={et1}
          style={[
            styles.inputView,
            { borderColor: opt1.length >= 1 ? "blue" : "#000" },
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={opt1}
          onChangeText={(txt) => {
            setOtp1(txt);
            if (txt.length >= 1) {
              et2.current.focus();
            }
          }}
        />
        <TextInput
          ref={et2}
          style={[
            styles.inputView,
            { borderColor: opt2.length >= 1 ? "blue" : "#000" },
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={opt2}
          onChangeText={(txt) => {
            setOtp2(txt);
            if (txt.length >= 1) {
              et3.current.focus();
            } else if (txt.length < 1) {
              et1.current.focus();
            }
          }}
        />
        <TextInput
          ref={et3}
          style={[
            styles.inputView,
            { borderColor: opt3.length >= 1 ? "blue" : "#000" },
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={opt3}
          onChangeText={(txt) => {
            setOtp3(txt);
            if (txt.length >= 1) {
              et4.current.focus();
            } else if (txt.length < 1) {
              et2.current.focus();
            }
          }}
        />
        <TextInput
          ref={et4}
          style={[
            styles.inputView,
            { borderColor: opt4.length >= 1 ? "blue" : "#000" },
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={opt4}
          onChangeText={(txt) => {
            setOtp4(txt);
            if (txt.length >= 1) {
              et4.current.focus();
            } else if (txt.length < 1) {
              et3.current.focus();
            }
          }}
        />
      </View>
      <View style={styles.resend}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: count === 0 ? "blue" : "gray",
          }}
          onPress={() => {
            resendOtp();
          }}
        >
          Resend
        </Text>
        {count !== 0 && (
          <Text style={{ marginLeft: 20, fontSize: 20 }}>
            {count + " seconds"}
          </Text>
        )}
      </View>
      <TouchableOpacity
        disabled={
          opt1 !== "" && opt2 !== "" && opt3 !== "" && opt4 !== ""
            ? false
            : true
        }
        style={[
          styles.verify,
          {
            backgroundColor:
              opt1 !== "" && opt2 !== "" && opt3 !== "" && opt4 !== ""
                ? "blue"
                : "#949494",
          },
        ]}
        onPress={() => {
          otpValidate();
        }}
      >
        <Text style={styles.btn}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 100,
    alignSelf: "center",
    color: "#000",
  },
  otpView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 100,
  },
  inputView: {
    width: 50,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },
  verify: {
    width: "90%",
    height: 55,
    backgroundColor: "blue",
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    color: "#fff",
    fontSize: 20,
  },
  resend: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 30,
  },
});
