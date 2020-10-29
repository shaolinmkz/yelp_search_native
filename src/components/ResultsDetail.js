import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function ResultsDetail({
  result: {
    name,
    image_url,
    review_count,
    rating,
  }
}) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image_url  }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text>{rating} Stars, {review_count} Reviews</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 5,
  },
  name: {
    fontWeight: 'bold'
  }
});
