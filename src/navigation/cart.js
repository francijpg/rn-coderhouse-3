import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../screens";
import { colors } from "../constants/themes/colors";
import { isIOS } from "../constants/utils/platform";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
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
        name="Cart"
        component={CartScreen}
        // options={{
        //   headerShown: false,
        // }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;
