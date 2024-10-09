import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function Tab() {
  const [text, onChangeText] = React.useState("digite seu nome");
  const [email, onChangeEmail] = React.useState("digite seu email");
  const [number, onChangeNumber] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>login</Text>

      <Text style={styles.text}>nome</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text style={styles.text}>email</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color: 'purple',
    textAlign: 'center'
  },
  text: {
    height: 10,
    padding: 10,
    fontFamily: "bold",
    fontSize: 20,
    textAlign: 'auto'
  },
  logo: {
    textAlign: 'auto',
    color: 'blue',
    fontSize: 30,
    padding: 50
  }
});
