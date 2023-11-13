import React, { useState } from "react";
import {
  ScrollView,
  Button,
  TextInput,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";

function RegisterScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordAgainError, setPasswordAgainError] = useState("");

  const handleRegister = () => {
    setEmailError("");
    setUsernameError("");
    setPasswordError("");
    setPasswordAgainError("");

    const handleRegisters = async () => {
      console.log("handel register");
      try {
        const response = await axios.post(
          "http://10.6.53.47:4000/users/register",
          {
            email,
            username,
            password,
            // passwordAgain,
          }
        );
        console.log(response.data);
        if (response.status === 200) {
          Alert.alert("Đăng ký thành công!");
          navigation.navigate("Login");
        }
      } catch (error) {
        console.log("đăng ký thất bại");
        console.error(error);
      }
    };
    const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;

    if (!emailRegex.test(email)) {
      setEmailError("Email phải có định dạng email và đuôi @gmail.com");
    }
    if (username.length < 6) {
      setUsernameError("Tài khoản phải có ít nhất 6 ký tự");
    }
    if (password.length < 6) {
      setPasswordError("Mật khẩu phải có ít nhất 6 ký tự");
    }
    if (passwordAgain != password) {
      setNumberidentifyError("Vui lòng nhập ít nhất 6 ký tự");
    }
    if (email && username && password && emailRegex.test(email)) {
      console.log("register 123");
      handleRegisters(); // Thêm dấu ngoặc tròn để gọi hàm
    }
  };

  return (
    <ImageBackground style={styles.img} source={require("../image/anh6.jpg")}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email"
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

        <TextInput
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          value={username}
          placeholder="Username"
        />
        {usernameError ? (
          <Text style={styles.error}>{usernameError}</Text>
        ) : null}

        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="password"
          secureTextEntry={true}
        />
        {passwordError ? (
          <Text style={styles.error}>{passwordError}</Text>
        ) : null}

        <TextInput
          style={styles.input}
          onChangeText={(text) => setPasswordAgain(text)}
          value={passwordAgain}
          placeholder="passwordAgain"
          secureTextEntry={true}
        />
        {passwordAgainError ? (
          <Text style={styles.error}>{passwordAgainError}</Text>
        ) : null}

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            handleRegister();
          }}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32, // Tăng kích thước tiêu đề
    color: "blue",
    marginBottom: 20, // Di chuyển tiêu đề xuống dưới
  },
  input: {
    width: 300, // Tăng kích thước trường nhập liệu
    height: 50, // Tăng kích thước trường nhập liệu
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 25, // Bo góc của trường nhập liệu
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  buttonContainer: {
    backgroundColor: "blue",
    paddingVertical: 15,
    paddingHorizontal: 70,
    marginTop: 20,
    borderRadius: 25, // Bo góc của nút
  },
  buttonText: {
    color: "white",
    fontSize: 20, // Tăng kích thước chữ nút
    textAlign: "center",
  },
});

export default RegisterScreen;
