import React, { useState, useEffect } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from '../api/yelp';

export default ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);

  const getResult = async () => {
    try {
      const { data } = await yelp.get(`/${id}`);
      setResult(data);
    } catch(error) {
      setPageLoading(false);
    }
  }

  useEffect(() => {
    getResult().then(() => {
      setPageLoading(false)
    });
  }, []);

  return pageLoading ? (
    <View style={styles.loader}>
      <EvilIcons name="spinner-2" size={150} color="black" />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <FlatList
        keyExtractor={(photo) => photo}
        data={result.photos}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  loader: {
    position: "absolute",
    top: 0,
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 5,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20,
  }
});
