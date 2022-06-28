import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrdersScreen } from "../screens";
import { colors } from "../constants/themes/colors";
import { isIOS } from "../constants/utils/platform";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
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
        name="Orders"
        component={OrdersScreen}
        // options={{
        //   headerShown: false,
        // }}
      />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
