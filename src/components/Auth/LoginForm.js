import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

import { useFormik } from "formik";
import * as Yup from "yup";
import { user as userData, userDetails } from "../../utils/userDB";
import { AuthContext } from "../../contexts/AuthContext";


const LoginForm = () => {
  const { logIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required("El usuario es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError("")

      const { username, password } = formValue;

      if (username !== userData.username || password !== userData.password) {
        setError("Credenciales incorrectas");
      } else {
        logIn(userDetails);
      }
    },

  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        placeholderTextColor={'#686a68'}
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      {
        formik.errors.username && <Text style={styles.errorLabel}>{formik.errors.username}</Text>
      }
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor={'#686a68'}
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
        secureTextEntry
      />
      {
        formik.errors.password && <Text style={styles.errorLabel}>{formik.errors.password}</Text>
      }
      {
        error !== "" && <Text style={styles.errorLabel}>{error}</Text>
      }
      <Button style={styles.button} title="Entrar" onPress={formik.handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  button: {
    marginHorizontal: 10,
    backgroundColor: "red"
  },
  errorLabel: {
    marginLeft: 12,
    color: "red",
    fontWeight: "bold"
  }
});

export default LoginForm;