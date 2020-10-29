import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default ({
  onChangeText,
  value,
  autoCorrect,
  onEndEditing,
  loading,
}) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={autoCorrect}
        onEndEditing={onEndEditing}
      />
      {loading && <EvilIcons name="spinner" size={35} color="black" />}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    margin: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 35,
    marginRight: 5,
  },
});
