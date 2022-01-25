import React from "react";
import { capitalize } from "lodash";
import { Text, View, StyleSheet, Image } from "react-native";
import { getColorByType } from "../../utils/getColorByType";

const Header = ({ name, order, image, type }) => {
  const color = getColorByType(type);

  const bgStyles = {
    backgroundColor: color,
    ...styles.bgStyles
  }
  return (
    <View>
      <View style={bgStyles} />
      <View style={styles.header}>
        <Text style={styles.name}>{capitalize(name)}</Text>
        <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgStyles: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }]
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 10
  },  
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 27
  },
  order: {
    color: "white",
    fontWeight: "bold"
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30
  },  
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain"
  },
});

export default Header;