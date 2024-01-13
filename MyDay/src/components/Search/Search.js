import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { backgroundColor, white } from "../../Constants/Colors";

export default function Search({ navigation, }) {
  const handleSearchPress = () => {
    navigation.navigate("SearchPage");
  };

  return (
    <View>
      <TouchableOpacity
        onPress={handleSearchPress}
        style={styles.SearchContainer}
      >
        <Feather name="search" size={24} color="black" />
        <Text style={styles.input}>Discover Vendors Faster and Easier</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  SearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: white,
    borderRadius: 30,
    padding: 8,
    marginHorizontal: 12,
    justifyContent: "space-between",
    elevation: 3,
    width: "85%",
  },
  input: {
    flex: 1,
    color: "grey",
   
  },

});
