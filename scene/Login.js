import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import {styles} from "../stylesheet/auth"

export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <React.Fragment>
      {/* Notification shade */}
      <StatusBar backgroundColor="#111827" />
      {/*main body  */}
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.cover}
            source={require("../assets/itc_logo.png")}
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Employee ID"
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgot_button} onPress={() => navigation.navigate('Register')}>Not Registered?Click here</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Dashboard')}>
            <Text style={styles.loginText} >LOGIN</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
}
