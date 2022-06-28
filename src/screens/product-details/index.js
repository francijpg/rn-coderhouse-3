import React from "react";
import { useSelector } from "react-redux";
// import { products } from "../../data";
import { View, Text } from "react-native";
import { styles } from "./styles";

const ProductDetailsScreen = () => {
  // const ProductDetailsScreen = ({ route }) => {
  // const { productId } = route.params;
  // const product = products.find((product) => product.id === productId);

  const product = useSelector((state) => state.product.selected);

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.text}>id: {product.id}</Text>
        <Text style={styles.text}>{product.name}</Text>
        <Text style={styles.text}>{product.description}</Text>
        <Text style={styles.text}>{product.weight}</Text>
        <Text style={styles.text}>${product.price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;
