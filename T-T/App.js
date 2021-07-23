import * as React from "react";
import { Button, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import Register from "./Register";
import AppHome from "./AppHome";

function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Landing Page</Text>
      <Text> </Text>
      <Button title="Sign Up" onPress={() => navigation.navigate("Register")} />
      <Text> </Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate("LoginScreen")}
      />
      <Text> </Text>
      <Button
        title="AppHome(with bottom nav)"
        onPress={() => navigation.navigate("AppHome")}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AppHome" component={AppHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "turquoise",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});