import React from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Dimensions,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Services = ({ navigation }) => {
  const services = [
    {
      id: "0",
      image: require("../../assets/Venues/Venue1.png"),
      name: "Venue",
    },
    {
      id: "1",
      image: require("../../assets/Venues/entertainment.jpeg"),
      name: "entertainment",
    },
    {
      id: "2",
      image: require("../../assets/Venues/catering.jpg"),
      name: "catering",
    },
    {
      id: "3",
      image: require("../../assets/Venues/planner.jpg"),
      name: "planner",
    },
    {
      id: "4",
      image: require("../../assets/Venues/accessories.jpg"),
      name: "accessories",
    },
    {
      id: "5",
      image: require("../../assets/Venues/cake.jpg"),
      name: "cakes",
    },
    {
      id: "6",
      image: require("../../assets/Venues/clothes.jpg"),
      name: "clothes",
    },
    {
      id: "7",
      image: require("../../assets/Venues/photographer.jpg"),
      name: "photographer",
    },
    {
      id: "8",
      image: require("../../assets/Venues/decoration.jpg"),
      name: "decoration",
    },
  ];
  const windowWidth = Dimensions.get("window").width;
  const itemWidth = windowWidth / 4;
  const imageWidth = itemWidth-24;
  const imageHeight = imageWidth;
  

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((service) => (
          <Pressable
            style={[styles.pressable, { width: itemWidth }]}
            key={service.id}
            onPress={() => navigation.navigate("CategoryScreen", { service })}
          >
            <View style={styles.carroussel}>
              <View
                style={[
                  styles.pressableImage,
                  { width: imageWidth, height: imageHeight },
                ]}
              >
                <Image source={service.image} style={styles.image} />
              </View>
            </View>
            <Text style={styles.carrousselText}>{service.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 999,
    
  },
  pressable: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  pressableImage: {
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
  carroussel: {
    backgroundColor: "white",
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
  },
  carrousselText: {
    padding: 5,
    fontWeight: "600",
  },
});
