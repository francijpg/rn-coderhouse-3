import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";

const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{formatDate(item.date)}</Text>
      </View>
      <View style={styles.containerDetail}>
        <View style={styles.detail}>
          <Text style={styles.detailTotal}>Total:{item.total}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;
