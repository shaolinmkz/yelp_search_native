import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";


export default () => {
  const [term, setTerm] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleTermChange = (value) => {
    setTerm(value);
  };

  const searchApi = async () => {
   try {
    const { data } = await yelp.get('/search', {
      params: {
        limit: 50,
        location: 'san jose',
        term,
      }
    });

    setResults(data.businesses);
    setSearchLoading(false);

   } catch (error) {
    setSearchLoading(false)
   }

  }

  const handleSubmit = () => {
    if(term) {
      setSearchLoading(true)
      searchApi()
    }
  };

  return (
    <View style={styles.background}>
      <SearchBar
        onChangeText={handleTermChange}
        value={term}
        onEndEditing={handleSubmit}
        autoCorrect
        loading={searchLoading}
      />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    height: "100%",
  },
});
