import { useFocusEffect } from "@react-navigation/native";
import React, { useContext, useCallback, useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { getFavorites } from "../../api/favorite";
import { AuthContext } from "../../contexts/AuthContext";

const UserData = () => {
  const [total, setTotal] = useState(0);
  const { auth: user, logOut } = useContext(AuthContext);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getFavorites();
          setTotal(response.length);
        } catch (error) {
          setTotal(0);
        }
      })()
    }, [])
  );

  return (
    <View style={styles.content}>
       <View  style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.title}>{user.firstName} {user.lastName}</Text>
       </View>

       <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${user.firstName} ${user.lastName}`} />
        <ItemMenu title="Username" text={`${user.username}`} />
        <ItemMenu title="Email" text={`${user.email}`} />
        <ItemMenu title="Favoritos" text={`${total} favoritos`} />
       </View>

       <Button title="Salir" onPress={logOut} />
    </View>
  );
};

const ItemMenu = (props) => {
  const { title, text } = props;

  return (
    <View style={styles.menu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({ 
  content: {
    marginHorizontal: 20,
    marginTop: 20
  },
  titleBlock: {
    marginBottom: 30
  },
  title: {
    fontWeight: "bold",
    fontSize: 22
  },
  dataContent: {
    marginBottom: 20
  },
  menu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#FCFCFC"
  },
  itemMenuTitle: {
    fontWeight: "bold",
    marginRight: 5,
    width: 120,

  }
});

export default UserData;