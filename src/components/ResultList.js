import React from "react";
import { withNavigation } from "react-navigation";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultsDetail from "./ResultsDetail";

export default withNavigation(({
  title,
  results,
  navigation: { navigate }
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
            <TouchableOpacity onPress={() => navigate('ResultShow', { id: item.id })}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          )}
        />
    </View>
  ) : null;
});

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  }
});
