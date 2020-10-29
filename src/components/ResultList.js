import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

export default ({
  title,
  results,
}) => {
  return results?.length ? (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => (
            <ResultsDetail result={item} />
          )}
        />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  }
});
