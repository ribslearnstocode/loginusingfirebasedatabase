import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { firebase } from "../config";

import "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  registerUser = async (email, password, firstName, lastName) => {
    await firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: "https://mitxrib8n3e.firebaseapp.com",
          })
          .then(() => {
            alert("verificant mail sent");
          })
          .catch((error) => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                firstName,
                lastName,
                email,
              });
          })
          .catch((error) => {
            alert(error.message);
          });
      });
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 23 }}>Register Here!</Text>
      <View style={{ marginTop: 40 }}>
        <TextInput
          style={styles.textInput}
          placeholder="First Name"
          onChangeText={(firstName) => setFirstName(firstName)}
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Lasr Name"
          onChangeText={(lastName) => setLastName(lastName)}
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
       style={styles.button} onPress={() => registerUser(email, password, firstName, lastName) }
      >
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  textInput: {
    paddingTop: 20,
    paddingBottom: 10,
    width: 400,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    marginTop: 50,
    height: 70,
    width: 250,
    backgroundColor: "#026efd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
