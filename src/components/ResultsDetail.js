import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.name}>
        {result.rating} Stars , {result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultsDetail;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});
