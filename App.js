import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import RessultShowScreen from "./src/screens/RessultShowScreen";
const navigator = createStackNavigator(
  {
    search: SearchScreen,
    RessultShow: RessultShowScreen,
  },
  {
    initialRouteName: "search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);
export default createAppContainer(navigator);
