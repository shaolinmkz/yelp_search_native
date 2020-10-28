import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default ({
  title,
  results,
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
          horizontal
          data={results}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => (
            <Text>{item.name}</Text>
          )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
