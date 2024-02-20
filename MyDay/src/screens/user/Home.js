import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import {
  primaryPink,
  backgroundColor,
  secondaryWhite,
  white,
} from "../../Constants/Colors";
import Search from "../../components/Search/Search";
import Services from "../../components/HorizontalList/CategoriesHome";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#8e5765" barStyle="light-content" />
      <View style={styles.stickyHeader}>
        <View style={{ bottom: -60, alignItems: "center" }}>
          <Search navigation={navigation} />
        </View>
      </View>
      <View style={styles.categories}>
        <Services />
      </View>
      <View style={{ flex: 1 }}></View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1,
  },
  stickyHeader: {
    top: 0,
    left: 0,
    right: 0,
    height: "15%",
    backgroundColor: primaryPink,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 50,
  },
  categories: {
    alignItems: "center",
    justifyContent: "center",
    height: "30%",
  },
});
