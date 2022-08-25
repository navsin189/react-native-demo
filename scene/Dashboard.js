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

export default function Dashboard() {
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#111827" />
      <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
          
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
}
