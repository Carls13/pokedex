import React, { useContext } from "react";
import { Text, View } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";
import { AuthContext } from "../contexts/AuthContext";

const AccountScreen = () => {
  const { auth: user } = useContext(AuthContext);

  return (
    <View>
      {
        user ? <UserData /> : <LoginForm/>
      }
    </View>
  );
}

export default AccountScreen;