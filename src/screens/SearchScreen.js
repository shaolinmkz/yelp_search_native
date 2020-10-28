import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

export default () => {
  const [term, setTerm] = useState("");
  const [err, setErr] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleTermChange = (value) => {
    setTerm(value);
    setErr("");
  };

  const searchApi = async (searchTerm) => {
    try {
      setErr("");
      const { data } = await yelp.get("/search", {
        params: {
          limit: 50,
          location: "san jose",
          term: searchTerm,
        },
      });

      setResults(data.businesses);
      setSearchLoading(false);
    } catch (error) {
      setSearchLoading(false);
      setResults([]);
      setErr("Something went wrong");
    }
  };

  const handleSubmit = () => {
    if (term) {
      setSearchLoading(true);
      searchApi(term);
    }
  };

  useEffect(() => {
    setPageLoading(true)
    searchApi("pasta")
    .then(() => {
      setPageLoading(false)
    });
  }, []);

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
