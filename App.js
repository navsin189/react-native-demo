import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
// import { Icon } from "@rneui/themed";
// import { FAB } from "@rneui/themed";
import Login from "./scene/Login"
import Register from "./scene/Register"

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Register />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2e8f0",
  },
  appBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    textAlign: "center",
    backgroundColor: "#f8fafc",
    borderRadius: 12,
    marginTop: 2,
    marginRight: 10,
    marginLeft: 10,
  },
  appBarText: {
    fontSize: 30,
    fontStyle: "normal",
  },
  musicPlayer: {
    height: "90%",
    display: "flex",
    alignItems: "center",
    paddingTop: 80,
  },
  logoContainer: {
    height: 170,
    marginTop: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cover: {
    width: "45%",
    height: "100%",
    borderRadius: 10,
  },
  formContainer:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%"
  },
  inputView: {
    backgroundColor: "#f8fafc",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    color: "#1e40af"
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:"#2953BB"
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#1B3881",
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});
