import * as React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import Register from "./Register";
import AppHome from "./AppHome";
import ForgotPassword from "./ForgotPassword";
import { FitnessGoal } from "./QuizScreens/Question1";
import { Section1 } from "./QuizScreens/QuizSection1";
import ProfileScreen from "./screens/ProfileScreen";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";
import { LinearGradient } from "expo-linear-gradient";

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);
const Stack = createStackNavigator();

function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(223, 238, 235, 0.8)", "transparent"]}
        style={styles.background}
      />
      {/** Changed AppHome to Section1 */}
      <Pressable onPress={() => navigation.navigate("ProfileScreen")}>
        <Image source={require("../T-T/assets/logo.png")} style={styles.pic} />
      </Pressable>
      <Pressable
        style={styles.box}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.buttonText}> Get started </Text>
      </Pressable>
      <Pressable
        style={styles.box2}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.buttonText}> Log in </Text>
      </Pressable>
    </View>
  );
}

const Stack = createStackNavigator();

//Added FitnessGoal as a Stack.Screen
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage" headerMode="none">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AppHome" component={AppHome} />
        <Stack.Screen name= "ProfileScreen" component={ProfileScreen}/>
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "turquoise",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  pic: {
    height: 250,
    width: 275,
    marginTop: "20%",
    marginBottom: "20%",
  },
  box: {
    backgroundColor: "#37686D",
    borderRadius: 10,
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
  },
  box2: {
    backgroundColor: "#8FBBC0",
    borderRadius: 10,
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.75,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
});

export default App;
