import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CategoriesScreen,
  ProductDetailsScreen,
  ProductsScreen,
} from "../screens";
import { colors } from "../constants/themes/colors";
import { isIOS } from "../constants/utils/platform";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? colors.secondary : colors.primary,
        },
        headerTintColor: isIOS ? colors.black : colors.white,
        headerTitleStyle: {
          fontFamily: "Lato-Bold",
        },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        // options={({ route }) => ({
        //   title: route.params.title,
        // })}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        // options={({ route }) => ({
        //   title: route.params.name,
        // })}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
