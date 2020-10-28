import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';

export default () => {
  const {
    handleSubmit,
    handleTermChange,
    err,
    searchLoading,
    pageLoading,
    results,
    term,
  } = useResults();

  return pageLoading ? (
    <View
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <EvilIcons name="spinner-2" size={150} color="black" />
    </View>
  ) : (
    <View style={styles.background}>
      <SearchBar
        onChangeText={handleTermChange}
        value={term}
        onEndEditing={handleSubmit}
        autoCorrect={false}
        loading={searchLoading}
      />
      {!!err && <Text style={styles.error}>{err}</Text>}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    height: "100%",
    padding: 10,
    paddingHorizontal: 15,
  },
  error: {
    padding: 10,
    backgroundColor: "red",
    textAlign: "center",
    color: "#fff",
    fontSize: 17,
  },
});
