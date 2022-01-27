import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { getColorByType } from "../../utils/getColorByType";

import { map, capitalize } from "lodash";

const Types = ({ types }) => {
  return (
    <View style={styles.content}>
      {
        map(types, (item, index) => {
          const typeName = capitalize(item.type.name);
          const capitalizedName = capitalize(typeName);
          return (
            <View key={index} style={{...styles.pill, backgroundColor: getColorByType(typeName)}}>
              <Text>{capitalizedName}</Text>
            </View>
          )
        })
      }
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10
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

export default Types;