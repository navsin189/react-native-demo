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
import { styles } from "../stylesheet/auth";
import { dashboardStyles } from "../stylesheet/dashboard";

export default function Dashboard() {
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#111827" />
      <SafeAreaView style={dashboardStyles.container}>
        <View style={dashboardStyles.userProfile} >
        <Image
            style={dashboardStyles.userDP}
            source={require("../assets/itc_logo.png")}
          />
        </View>
        <View style={dashboardStyles.userContainer}>
          <View ><Text style={dashboardStyles.greetingText}>Hello,</Text></View>
          <View ><Text style={dashboardStyles.userNameText}>Mr. Naveen Kumar Singh</Text></View>
        </View>
        <View style={dashboardStyles.today}>
        <Text style={dashboardStyles.todayText}>Add new Field Trip</Text>
        </View>
        <View style={dashboardStyles.trip}>
        <Text style={dashboardStyles.tripText}>Your recent Trip</Text>
        </View>
        <View style={{marginLeft:10,marginRight:10}}>
        <View style={dashboardStyles.appBar}><Text style={dashboardStyles.todayText}>to farmer Ravi</Text></View>
        <View style={dashboardStyles.appBar}><Text style={dashboardStyles.todayText}>to farmer satish</Text></View>
        <View style={dashboardStyles.appBar}><Text style={dashboardStyles.todayText}>to farmer abhi</Text></View>
        <View style={dashboardStyles.appBar}><Text style={dashboardStyles.todayText}>to farmer pintu</Text></View>
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
}
