import { StyleSheet } from "react-native";
export const dashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#e2e8f0",
    backgroundColor: "#f8fafc",
  },
  userContainer: {
    display: "flex",
    // flexDirection: "row",
    height: "10%",
    width: "100%",
    // backgroundColor: "red",
    justifyContent: "space-evenly",
    marginTop: "5%",
    paddingLeft: "5%"
  },
  appBar: {
    textAlign: "center",
    backgroundColor: "tomato",
    borderRadius: 12,
    // width: "40%",
    height:50,
    marginTop: 4,
    marginBottom: 4,
    padding:3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  greetingText:{
    color: "#6F7176",
    fontSize: 24,
  },
  userNameText:{
    color: "#0B1A3E",
    fontSize: 24,
    fontWeight: "bold",
  },
  today:{
    backgroundColor: "#1B3881",
    height: "10%",
    marginTop: "5%",
    marginRight: "5%",
    marginLeft: "5%",
    marginBottom: "10%",
    borderRadius: 12,
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
  },
  todayText:{
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  },
  userProfile:{
    // backgroundColor: "lightgray",
    height: "9%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  userDP:{

    width:70,
    // backgroundColor: "gray",
    height:70,
  },
  trip:{
    margin:6,
    borderBottomWidth: 1.5,
    borderColor: "#6F7176"
  },
  tripText:{
    fontSize: 20,
    fontWeight: "bold",
    fontFamily:"monospace"
  }
});
