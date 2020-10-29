import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import useResults from "../hooks/useResults";

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

  const filterResultByPrice = (price) => {
    return results.filter((data) => data.price === price);
  };

  return pageLoading ? (
    <View style={styles.container}>
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
      <ScrollView>
        <ResultList results={filterResultByPrice("$")} title="Cost Effective" />
        <ResultList results={filterResultByPrice("$$")} title="Bit Pricer" />
        <ResultList results={filterResultByPrice("$$")} title="Bit Pricer" />
        <ResultList results={filterResultByPrice("$$$")} title="Big Spender" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  background: {
    backgroundColor: "#fff",
    height: "100%",
  },
  error: {
    padding: 10,
    marginHorizontal: 15,
    backgroundColor: "red",
    textAlign: "center",
    color: "#fff",
    fontSize: 17,
  },
});
